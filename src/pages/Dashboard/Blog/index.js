import React, { useRef, useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { collection, deleteDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { Layout, theme, Space, Table, Modal, Typography } from 'antd';
import { firestore, storage } from '../../../config/firebase';
import DashboardLayout from '../../../components/DashboardLayout';
import moment from 'moment';
import { useBlogContext } from '../../../context/BlogContext';

const { Content } = Layout;

const initialState = { title: '', shortDescription: '', detail: '' };
export default function Blog() {
    const { blogs, setBlogs } = useBlogContext();
    const [state, setState] = useState(initialState);
    const [open, setOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({});
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Define the columns for the table
    const columns = [
        { title: 'St#', dataIndex: 'num', key: 'num', },
        {
            title: 'Image',
            dataIndex: 'imgUrl',
            key: 'imgUrl',
            render: (url) => (
                <img src={url} alt='pic' className='rounded' style={{ height: 80, width: 80 }} />
            )
        },
        { title: 'Title', dataIndex: 'title', key: 'title' },
        {
            title: 'Short Description', dataIndex: 'shortDescription', key: 'shortDescription',
            render: (text) => (
                <Typography.Paragraph
                    ellipsis={{
                        rows: 4, // Adjust the number of visible rows
                        expandable: 'collapsible',
                        symbol: 'Read more',
                    }}
                >
                    {text}
                </Typography.Paragraph>
            ),
        },
        {
            title: 'Detail', dataIndex: 'detail', key: 'detail',
            render: (text) => (
                <Typography.Paragraph
                    ellipsis={{
                        rows: 4, // Adjust the number of visible rows
                        expandable: 'collapsible',
                        symbol: 'Read more',
                    }}
                >
                    {text}
                </Typography.Paragraph>
            ),
        },
        { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
        {
            title: 'Action', key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button className="btn btn-sm btn-outline-warning" onClick={() => handleUpdate(record)}>
                        Update
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(record.id)}>
                        Delete
                    </button>
                </Space>
            ),
        },
    ];

    // Prepare data for the table
    const data = blogs.map((blog, i) => {
        return {
            key: i + 1,
            num: i + 1,
            id: blog.id,
            imgUrl: blog.imgUrl,
            title: blog.title,
            shortDescription: blog.shortDescription,
            detail: blog.detail,
            createdAt: blog.createdAt ? moment(blog.createdAt.seconds * 1000).format('YYYY-MM-DD h:mm:ss a') : 'N/A',
        };
    });

    // handle change function for form input
    const handleChange = (e) => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    // Handle delete blog
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(firestore, "blogs", id));
            // Update state by removing the deleted blog
            setBlogs(blogs.filter(blog => blog.id !== id));
            window.toastify('Blog deleted successfully', 'success');
        } catch (error) {
            console.error("Error deleting blog: ", error);
            window.toastify('Failed to delete Blog', 'error');
        }
    };

    // Handle add new blog  data
    const handleAddData = () => {
        setOpen(true)
    }

    // handle updateblog data
    const handleUpdate = (record) => {
        setSelectedBlog(record);
        setState(record);
        setOpen(true);
    };

    // Handle modal close
    const handleCancel = () => {
        setOpen(false);
        setSelectedBlog({});
    };

    // Handle form submit
    const handleFormSubmit = async () => {
        let { title, shortDescription, detail } = state
        title = title.trim()
        shortDescription = shortDescription.trim()
        detail = detail.trim()

        if (!title || !shortDescription || !detail) { return window.toastify("All fields are must required", 'error') }
        if (!file) { return window.toastify("Upload the Image", 'error') }
        const document = {
            title,
            shortDescription,
            detail,
        }

        if (selectedBlog.id) {
            // If updating, upload the image and update the existing blog
            uploadFile(document, selectedBlog.id);
        } else {
            // If adding a new blog, proceed with uploading the image and creating a new blog
            uploadFile(document);
        }


    };

    // Upload file to firebase storage
    const uploadFile = async (document, blogId) => {
        setConfirmLoading(true)
        const storageRef = ref(storage, 'blogImages/' + file.name);
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
                    // createDocument(dataDoc)


                    if (blogId) {
                        // If it's an update, use `updateDoc`
                        const blogRef = doc(firestore, 'blogs', blogId);
                        await setDoc(blogRef, dataDoc, { merge: true }); // Merge true ensures existing data is updated

                        window.toastify('Blog updated successfully', 'success');
                        setConfirmLoading(false);
                        setBlogs(blogs.map(blog => blog.id === blogId ? { ...blog, ...dataDoc } : blog));
                        setOpen(false);
                        setState(initialState);
                        setSelectedBlog({});

                    } else {
                        // If it's a new blog, use `createDocument`
                        createDocument(dataDoc);
                    }
                });
            }
        );
    }

    // Create a new document in firestore
    const createDocument = async (data) => {
        try {
            const newDocRef = await doc(collection(firestore, "blogs"));

            // Get the generated document ID
            const documentId = newDocRef.id;

            // Set the document data with the document ID included
            await setDoc(newDocRef, {
                ...data,
                id: documentId,  // Include the ID in the document data
                createdAt: serverTimestamp()
            });

            window.toastify('Blog add Successfully', "success");
        } catch (e) {
            console.error("Error adding document: ", e);
            window.toastify('Something went wrong while upload blog', "error");
        } finally {
            setState(initialState);
            setConfirmLoading(false);
            if (fileInputRef.current) { fileInputRef.current.value = '' }
            setOpen(false)
        }
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <DashboardLayout />
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <div className="row heading m-3">
                            <h2 className="text-center">Blogs</h2>
                        </div>
                        <div className='text-end'>
                            <button className='btn btn-warning me-3 mb-3 ' onClick={handleAddData}>Add</button>
                        </div>
                        <div className="table-responsive">
                            <Table columns={columns} dataSource={data} />
                        </div>
                    </div>
                </Content>
                <Modal
                    title="Title"
                    open={open}
                    onOk={handleFormSubmit}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <form action="">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control form-control-sm mb-2" name='title' value={state.title} onChange={handleChange} />
                        <label htmlFor="shortDescription">Short Description</label>
                        <input type="text" className="form-control form-control-sm mb-2" name='shortDescription' value={state.shortDescription} onChange={handleChange} />
                        <label htmlFor="detail">Detail</label>
                        <textarea className="form-control form-control-sm mb-2" rows={3} style={{ resize: 'none' }} name='detail' value={state.detail} onChange={handleChange}></textarea>
                        <label htmlFor="blogImg">Image</label>
                        <input type="file" className="form-control form-control-sm" id="blogImg" name='photo' onChange={(e) => setFile(e.target.files[0])} ref={fileInputRef} />
                    </form>
                </Modal>
            </Layout>
        </Layout>
    );
}