import React from "react";
import Header from "../../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../../components/Footer";

export default function Contact() {
    let title = "Get in Touch with Us"
    let description = "Let's plan your perfect trip. Reach out for any inquiries or support"
    return (
        <>
            <Header title={title} description={description} />
            <main>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-6 p-3">
                            <div className="card p-2 border-0">
                                <div className="d-flex flex-column justify-content-center align-items-center ">
                                    <div className="icon-background">
                                        <FontAwesomeIcon icon={faLocationPin} className="fs-4" />
                                    </div>
                                    <div className="contact-title text-center mt-3">
                                        <h4>Address</h4>
                                        <p>Visit Dot Traveler Office</p>
                                        <p>145, office Sydney, Austrelia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 p-3">
                            <div className="card p-2 border-0">
                                <div className="d-flex flex-column justify-content-center align-items-center ">
                                    <div className="icon-background">
                                        <FontAwesomeIcon icon={faPhone} className="fs-4 " />
                                    </div>
                                    <div className="contact-title text-center mt-3">
                                        <h4>Phone</h4>
                                        <p>Call us for any Query</p>
                                        <p>234 444 455 <br />122 433 567</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 p-3">
                            <div className="card p-2 border-0">
                                <div className="d-flex flex-column justify-content-center align-items-center ">
                                    <div className="icon-background">
                                        <FontAwesomeIcon icon={faMailBulk} className="fs-4 " />
                                    </div>
                                    <div className="contact-title text-center mt-3">
                                        <h4>Mail</h4>
                                        <p>Get in touch with email</p>
                                        <p>dottravel@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}