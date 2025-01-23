import React from 'react';
import logo from '../../assets/pics/icons.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
    let year = new Date().getFullYear();

    return (
        <footer>
            <div className="container-fluid footer pt-3 mt-5">
                <div className="container py-4">
                    <div className="row g-5 d-flex align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className='d-flex flex-column '>
                                <div className='d-flex align-items-center '>
                                    <img src={logo} alt="" />
                                    <h3 className=' ms-2'>Dot.</h3>
                                </div>
                                <div className='d-flex pt-3'>
                                    <p className="btn btn-outline-primary btn-social" ><FontAwesomeIcon icon={faInstagram} /></p>
                                    <p className="btn btn-outline-primary btn-social" ><FontAwesomeIcon icon={faTwitter} /></p>
                                    <p className="btn btn-outline-primary btn-social" ><FontAwesomeIcon icon={faLinkedinIn} /></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="mb-3">Information</h4>
                            <p className="btn btn-link" >Home</p>
                            <p className="btn btn-link" >Explore</p>
                            <p className="btn btn-link" >Travel</p>
                            <p className="btn btn-link" >Blog</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="mb-3">Helpful Links</h4>
                            <p className="btn btn-link" >Destination</p>
                            <p className="btn btn-link" >Support</p>
                            <p className="btn btn-link" >Travel & Condition</p>
                            <p className="btn btn-link" >Privacy</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="mb-4">Contact</h4>
                            <p className='mb-1 contact-info'>+651 125 658</p>
                            <p className='mb-5 contact-info'>dottravel@gmail.com</p>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col text-center text-md-start  mb-md-0">
                                <p className='text-center'> &copy;{year} , All Right Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
