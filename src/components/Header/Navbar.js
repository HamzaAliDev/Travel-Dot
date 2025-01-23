import React, { useEffect, useState } from 'react';
import icon from '../../assets/pics/icons.png'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export default function Navbar() {
    const { handleLogout } = useAuthContext()
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate()
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 80); // Change 80 to the height of your navbar
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogin = () => {
        navigate('/auth/login')
    }
    const handleSignUp = () => {
        navigate('/auth/register')
    }
    const handleLogOut = () => {
        handleLogout();
    }

    return (
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
                                <p className="nav-link  navbar-item fw-bolder" onClick={handleLogOut}>logout</p>
                            </li>
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
                            <li className="nav-item  me-1 mt-1">
                                <button className="btn btn-outline-primary btn-navbar" onClick={handleLogin}>Login</button>
                            </li>
                            <li className="nav-item me-1 mt-1">
                                <button className="btn btn-primary btn-navbar  btn-sign-up" onClick={handleSignUp}>SignUp</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
