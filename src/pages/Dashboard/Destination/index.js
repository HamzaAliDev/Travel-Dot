import React, { useRef, useState } from 'react'
import DashboardLayout from '../../../components/DashboardLayout';
import { Layout, theme, Space, Table, Modal, Select } from 'antd';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { firestore, storage } from '../../../config/firebase';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { useDestinationContext } from '../../../context/DestinationContext';

const { Content } = Layout;

const columns = (handleUpdate, handleDelete) => [
    { title: 'St#', dataIndex: 'num', key: 'num', },
    {
        title: 'Image', dataIndex: 'img', key: 'img',
        render: (url) => (
            <img src={url} alt='pic' className='rounded' style={{ height: 80, width: 80 }} />
        )
    },
    { title: 'Id', dataIndex: 'id', key: 'id', },
    { title: 'Title', dataIndex: 'title', key: 'title', },
    { title: 'Days', dataIndex: 'days', key: 'days', },
    { title: 'Price', dataIndex: 'price', key: 'price', },
    {
        title: 'Places', dataIndex: 'places', key: 'places',
        render: (places) => (
            <ul>
                {places.map((place, index) => (
                    <li key={index}>{place}</li>
                ))}
            </ul>
        ),
    },
    {
        title: 'Facilities', dataIndex: 'facilities', key: 'facilities',
        render: (facilities) => (
            <ul>
                {facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                ))}
            </ul>
        ),
    },
    {
        title: 'Action', key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <button className='btn btn-sm btn-outline-warning' onClick={() => handleUpdate(record)}>Update</button>
                <button className='btn btn-sm btn-outline-danger' onClick={() => handleDelete(record.id)} >Delete</button>
            </Space>
        ),
    },
];

const initialState = { title: "", days: "", price: "", places: [], facilities: [] }
export default function Destination() {
    const { destinations, setDestinations } = useDestinationContext();
    const [state, setState] = useState(initialState)
    const [file, setFile] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState({})
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const fileInputRef = useRef(null);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // data for table
    const data = destinations.map((u, i) => {
        return {
            key: i + 1,
            num: i + 1,
            img: u.imgUrl,
            id: u.id,
            title: u.title,
            days: u.days,
            price: u.price,
            places: u.places,
            facilities: u.facilities,
        }
    });

    const handleAddData = () => {
        setOpen(true)
    }
    const handleCancel = () => {
        setOpen(false)
        setSelectedDestination({});
        setState(initialState);
    }

    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }
    const handleTagChange = (value, field) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value, // `value` will be an array of places
        }));
    };

    // handle form submit
    const handleFormSubmit = () => {
        let { title, days, price, places, facilities } = state
        title = title.trim()

        if (title === '' || days === '' || price === '' || places === '' || facilities === '') { return window.toastify("All fields are must required", 'error') }
        if (!file) { return window.toastify("Upload the Image", 'error') }
        const document = {
            id: Math.random().toString(36).slice(3),
            title,
            days,
            price,
            places,
            facilities
        }
        if (selectedDestination.id) {
            // If updating, upload the image and update the existing blog
            uploadFile(document, selectedDestination.id);
        } else {
            // If adding a new blog, proceed with uploading the image and creating a new blog
            uploadFile(document);
        }
    }

    const uploadFile = async (document, destinationId) => {
        setConfirmLoading(true)
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                setConfirmLoading(false)
                console.error("error", error)
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    // console.log('File available at', downloadURL);
                    const dataDoc = { ...document, imgUrl: downloadURL }

                    if (destinationId) {
                        // If it's an update, use `updateDoc`
                        const blogRef = doc(firestore, 'Destinations', destinationId);
                        await setDoc(blogRef, dataDoc, { merge: true }); // Merge true ensures existing data is updated

                        window.toastify('Destination updated successfully', 'success');
                        setConfirmLoading(false);
                        setDestinations(destinations.map(dest => dest.id === destinationId ? { ...dest, ...dataDoc } : dest));
                        setOpen(false);
                        setState(initialState);
                        setSelectedDestination({});

                    } else {
                        // If it's a new blog, use `createDocument`
                        createDocument(dataDoc);
                    }
                });
            }
        );
    }
    const createDocument = async (data) => {
        try {
            await setDoc(doc(firestore, "Destinations", data.id), data);
            window.toastify('Document add successfully', 'success')

            setState(initialState)
            setFile(null)
            if (fileInputRef.current) { fileInputRef.current.value = '' }
            setOpen(false)
            setDestinations([...destinations, data])

        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setConfirmLoading(false)

    }
    const handleUpdate = (destination) => {
        setSelectedDestination(destination)
        setState(destination)
        setOpen(true)
    }

    const handleDelete = async (id) => {
        console.log("recordid", id)
        try {
            await deleteDoc(doc(firestore, "Destinations", id));
            // Update state by removing the deleted destination
            setDestinations(destinations.filter(d => d.id !== id));
            window.toastify('Destination deleted successfully', 'success');
        } catch (error) {
            console.error("Error deleting user: ", error);
            window.toastify('Failed to delete user', 'error');
        }
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <DashboardLayout />
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <div style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                        <div className='row heading m-3'>
                            <h2 className='text-center'>Destinations</h2>
                        </div>
                        <div className='text-end'>
                            <button className='btn btn-warning me-3 mb-3 ' onClick={handleAddData}>Add</button>
                        </div>
                        <div className='table-responsive'>
                            <Table columns={columns(handleUpdate, handleDelete)} dataSource={data} />
                        </div>
                    </div>
                </Content>
                <Modal

                    title="Add Destination"
                    open={open}
                    onOk={handleFormSubmit}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <form action="">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control form-control-sm mb-2" name='title' value={state.title} onChange={handleChange} />
                        <label htmlFor="days">Days</label>
                        <input type="number" className="form-control form-control-sm mb-2" name='days' value={state.days} onChange={handleChange} />
                        <label htmlFor="price">Price</label>
                        <input type="number" className="form-control form-control-sm mb-2" name='price' value={state.price} onChange={handleChange} />
                        <label htmlFor="places">Places to visit</label>
                        <Select
                            mode="tags"
                            className='mb-2'
                            style={{ width: '100%' }}
                            placeholder="Add places to visit"
                            value={state.places}
                            onChange={value => handleTagChange(value, 'places')}
                        >
                        </Select>
                        <label htmlFor="facilities">Facilities</label>
                        <Select
                            mode="tags"
                            className='mb-2'
                            style={{ width: '100%' }}
                            placeholder="Facilities"
                            value={state.facilities}
                            onChange={value => handleTagChange(value, 'facilities')}
                        >
                        </Select>
                        <label htmlFor="destinationImg">Image</label>
                        <input type="file" className="form-control form-control-sm" id="destinationImg" name='photo' onChange={(e) => setFile(e.target.files[0])} ref={fileInputRef} />
                    </form>
                </Modal>
            </Layout>
        </Layout>
    )
}
