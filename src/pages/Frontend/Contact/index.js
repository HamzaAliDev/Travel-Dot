import React from "react";
import Header from "../../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../../components/Footer";

export default function Contact() {
    let title = "Get in Touch with Us";
    let description = "Let's plan your perfect trip. Reach out for any inquiries or support";

    const handleSubmit = (values) => {
        window.toastify("Message sent successfully", "success");
    };

    return (
        <>
            <Header title={title} description={description} />
            <main>
                <div className="container">
                    {/* Contact Information Cards */}
                    <div className="mt-5 row d-flex flex-wrap align-items-center justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-6 p-3">
                            <div className="card p-2 border-0 shadow-sm">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="icon-background">
                                        <FontAwesomeIcon icon={faLocationPin} className="fs-4" />
                                    </div>
                                    <div className="contact-title text-center mt-3">
                                        <h4>Address</h4>
                                        <p>Visit Dot Traveler Office</p>
                                        <p>145, office Sydney, Australia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 p-3">
                            <div className="card p-2 border-0 shadow-sm">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="icon-background">
                                        <FontAwesomeIcon icon={faPhone} className="fs-4" />
                                    </div>
                                    <div className="contact-title text-center mt-3">
                                        <h4>Phone</h4>
                                        <p>Call us for any Query</p>
                                        <p>234 444 455 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 p-3">
                            <div className="card p-2 border-0 shadow-sm">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div className="icon-background">
                                        <FontAwesomeIcon icon={faMailBulk} className="fs-4" />
                                    </div>
                                    <div className="contact-title text-center mt-3">
                                        <h4>Mail</h4>
                                        <p>Get in touch via email</p>
                                        <p>dottravel@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="row mt-5 d-flex align-items-center justify-content-center">
                        {/* Google Maps iframe */}
                        <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.9905248496!2d72.75644090149726!3d33.616250938694684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738403046929!5m2!1sen!2s"
                                 allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"
                                width="100%"
                                height="403"
                                style={{ border: 0 }}
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                            <div className="card rounded-0 p-4 shadow-sm">
                                <h2 className="mb-4">Send Us a Message</h2>
                                <form >
                                    {/* Full Name and Email Fields */}
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            name="subject"
                                            placeholder="Enter the subject"
                                            required
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="5"
                                            placeholder="Enter your message"
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}