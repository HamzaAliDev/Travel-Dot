import React, { useCallback, useEffect, useState } from 'react';
import icon from '../../assets/pics/icons.png'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Modal, Table, Tag } from 'antd';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { firestore } from '../../config/firebase';
import moment from 'moment';

const columns = [
    { title: 'St#', dataIndex: 'num', key: 'num', },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Destination', dataIndex: 'destination', key: 'destination' },
    { title: 'Travelers', dataIndex: 'travelers', key: 'travelers' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Request', dataIndex: 'specialRequest', key: 'specialRequest' },
    { title: 'Created Booking', dataIndex: 'createdAt', key: 'createdAt' },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status) => {
            let color = 'geekblue'; // Default color
            if (status === 'rejected') {
                color = 'volcano';
            } else if (status === 'completed') {
                color = 'green';
            } else if (status === 'pending') {
                color = 'yellow';
            }
            return (
                <Tag color={color} key={status}>
                    {status.toUpperCase()}
                </Tag>
            );
        },
    },
]

export default function Navbar() {
    const { handleLogout, isAuthenticated, user } = useAuthContext()
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate()

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 80); // Change 80 to the height of your navbar
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const readData = useCallback(async () => {
        if (user && user.id) { // Check if user and user.id are valid
            // Create a query that orders data in ascending order by createdAt
            const q = query(
                collection(firestore, 'bookings'),
                where("userId", "==", user.id),  // Ensure user.id is used here
                orderBy('createdAt', 'desc')
            );
            const querySnapshot = await getDocs(q);
            let bookingList = [];
            querySnapshot.forEach((doc) => {
                bookingList.push({ id: doc.id, ...doc.data() }); // Include the document ID
            });
            setBookings(bookingList);
        } else {
            console.error('User ID is undefined');
        }
    }, [user]); // Adding user as dependency

    useEffect(() => {
        readData();
    }, [readData]);


    const handleLogin = () => {
        navigate('/auth/login')
    }
    const handleSignUp = () => {
        navigate('/auth/register')
    }
    const handleLogOut = () => {
        handleLogout();
        window.toastify('Logged out successfully', 'success');
        navigate('/');
    }
    const handleOk = () => {
        setOpen(false)
    }
    const handleCancel = () => {
        setOpen(false)
    }
    const data = bookings.map((booking, index) => {
        return {
            key: index,
            num: index + 1,
            name: booking.name,
            email: booking.email,
            destination: booking.destination,
            travelers: booking.travelers,
            price: booking.totalPrice,
            date: booking.date,
            specialRequest: booking.specialRequests,
            createdAt: booking.createdAt? moment(booking.createdAt.seconds * 1000).format('YYYY-MM-DD h:mm:ss a') : 'N/A',
            status: booking.status
        }
    });

    return (
        <>
            <div className={`header my-0 ${isScrolled ? 'scrolled' : ''}`}>
                <nav className="navbar navbar-expand-md py-0">
                    <div className="container-fluid px-lg-5 d-flex align-items-center">
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <div className='col-auto ms-lg-5'>
                                <p className="navbar-brand text-white fw-bolder fs-3 mb-0 nav-icon"><img src={icon} alt="" /> Dot</p>
                            </div>
                            <div className='col-auto'>
                                <button
                                    className="navbar-toggler btn-sm"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                        <div className='collapse navbar-collapse mt-0 pt-0 me-lg-5' id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item ">
                                    <Link to='/' className="nav-link  navbar-item fw-bolder">Home</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to='/destinations' className="nav-link  navbar-item">Destinations</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to='/contact' className="nav-link  navbar-item">Contact</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to='/bookings' className="nav-link  navbar-item">Bookings</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to='/blogs' className="nav-link  navbar-item" href="#">Blogs</Link>
                                </li>
                                {!isAuthenticated ?
                                    <>
                                        <li className="nav-item  me-1 mt-1">
                                            <button className="btn btn-outline-primary btn-navbar" onClick={handleLogin}>Login</button>
                                        </li>
                                        <li className="nav-item me-1 mt-1">
                                            <button className="btn btn-primary btn-navbar  btn-sign-up" onClick={handleSignUp}>SignUp</button>
                                        </li>
                                    </> :
                                    <li className="nav-item dropdown">
                                        {/* <p className="nav-link  navbar-item fw-bolder" onClick={handleLogOut}>logout</p> */}
                                        <FontAwesomeIcon icon={faUser} className='nav-link  navbar-item ms-4  dropdown-toggle' style={{ fontSize: '20px' }} data-bs-toggle="dropdown" aria-expanded="false" />
                                        <ul className="dropdown-menu bg-dark-subtle">
                                            <li><button className="dropdown-item" onClick={() => setOpen(true)}>Your Bookings</button></li>
                                            <li><button className="dropdown-item" onClick={handleLogOut}>Logout</button></li>

                                        </ul>
                                    </li>

                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <Modal title="Your Plans"
                open={open}
                width={'80%'}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className='table-responsive'>
                    <Table columns={columns} dataSource={data} />
                </div>

            </Modal>
        </>
    );
}
