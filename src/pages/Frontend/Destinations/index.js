import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import eiffel from '../../../assets/pics/eiffelTower1.jpg'
import barcelona from '../../../assets/pics/barcelona1.jpg'
import maldives from '../../../assets/pics/Maldives1.jpg'
import egypt from '../../../assets/pics/egypt1.jpg'
import istanbul from '../../../assets/pics/istanbul1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleVan, faHotel, faUtensils, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Tag } from 'antd'
import { WifiOutlined } from '@ant-design/icons';

export default function Destinations() {
    let title = "Discover Eco-Friendly Destinations";
    let description = 'Travel to your favourite city with respectful of the environment'
    return (
        <>
            <Header title={title} description={description} />
            <main>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <h2 className='text-center'>Our Destinations</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className=' d-flex flex-wrap flex-row align-items-center justify-content-center '>
                            <div className="col-lg-4 col-md-6 col-sm-10 mb-2 mb-2 px-2">
                                <div className="card destination-card rounded-3">
                                    <div className='destination-img-container'>
                                        <img src={eiffel} className="card-img-top card-img-in-desti" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex align-items-center'>
                                                <h5 className="card-text fw-semibold">Paris</h5>
                                                <div className='line-card ms-4'></div>
                                            </div>
                                            <h5 className="card-text text-primary">.Dot</h5>
                                        </div>
                                        <div className='destination-description'>
                                            <p className='mb-0 pb-0 fw-semibold'>Places to Visit</p>
                                            <ul className='places-visit mb-0 '>
                                                <li>Eiffel Tower</li>
                                                <li>Palace of Versailles</li>
                                                <li>Louvre Museum</li>
                                                <li>Sainte-Chapelle</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className='fw-semibold'>Complete Package</p>
                                            <div className='d-flex flex-row flex-wrap my-1'>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faCalendarAlt} /> 5 Days</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faHotel} /> 5 Star Hotel Rooms</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faUtensils} /> Food</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faShuttleVan} /> Shuttle</Tag>
                                                <Tag className='mb-2 px-2'><WifiOutlined /> Wi-Fi</Tag>
                                            </div>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className='destination-price ms-2 mb-0'>$1570</p>
                                            </div>
                                            <div>
                                                <button className='btn btn-primary rounded-1 py-1 ' >Booking</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 mb-2 mb-2 px-2">
                                <div className="card destination-card rounded-3">
                                    <div className='destination-img-container'>
                                        <img src={barcelona} className="card-img-top card-img-in-desti" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex align-items-center'>
                                                <h5 className="card-text fw-semibold">Barcelona</h5>
                                                <div className='line-card ms-4'></div>
                                            </div>
                                            <h5 className="card-text text-primary">.Dot</h5>
                                        </div>
                                        <div className='destination-description'>
                                            <p className='mb-0 pb-0 fw-semibold'>Places to Visit</p>
                                            <ul className='places-visit mb-0 '>
                                                <li>Sagrada Família</li>
                                                <li>Casa Batlló</li>
                                                <li>Barcelona's Central Park</li>
                                                <li>Bogatell Beach</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className='fw-semibold'>Complete Package</p>
                                            <div className='d-flex flex-row flex-wrap my-1'>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faCalendarAlt} /> 5 Days</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faHotel} /> 5 Star Hotel Rooms</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faUtensils} /> Food</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faShuttleVan} /> Shuttle</Tag>
                                                <Tag className='mb-2 px-2'><WifiOutlined /> Wi-Fi</Tag>
                                            </div>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className='destination-price ms-2 mb-0'>$1800</p>
                                            </div>
                                            <div>
                                                <button className='btn btn-primary rounded-1 py-1 ' >Booking</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 mb-2 mb-2 px-2">
                                <div className="card destination-card rounded-3">
                                    <div className='destination-img-container'>
                                        <img src={egypt} className="card-img-top card-img-in-desti" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex align-items-center'>
                                                <h5 className="card-text fw-semibold">Egypt</h5>
                                                <div className='line-card ms-4'></div>
                                            </div>
                                            <h5 className="card-text text-primary">.Dot</h5>
                                        </div>
                                        <div className='destination-description'>
                                            <p className='mb-0 pb-0 fw-semibold'>Places to Visit</p>
                                            <ul className='places-visit mb-0 '>
                                                <li>Pyramids of Giza</li>
                                                <li>The Great Sphinx</li>
                                                <li>The Grand Egyptian Museum</li>
                                                <li>Coptic Cairo</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className='fw-semibold'>Complete Package</p>
                                            <div className='d-flex flex-row flex-wrap my-1'>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faCalendarAlt} /> 5 Days</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faHotel} /> 5 Star Hotel Rooms</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faUtensils} /> Food</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faShuttleVan} /> Shuttle</Tag>
                                                <Tag className='mb-2 px-2'><WifiOutlined /> Wi-Fi</Tag>
                                            </div>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className='destination-price ms-2 mb-0'>$1150</p>
                                            </div>
                                            <div>
                                                <button className='btn btn-primary rounded-1 py-1 ' >Booking</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 mb-2 mb-2 px-2">
                                <div className="card destination-card rounded-3">
                                    <div className='destination-img-container'>
                                        <img src={istanbul} className="card-img-top card-img-in-desti" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex align-items-center'>
                                                <h5 className="card-text fw-semibold">Istanbul</h5>
                                                <div className='line-card ms-4'></div>
                                            </div>
                                            <h5 className="card-text text-primary">.Dot</h5>
                                        </div>
                                        <div className='destination-description'>
                                            <p className='mb-0 pb-0 fw-semibold'>Places to Visit</p>
                                            <ul className='places-visit mb-0 '>
                                                <li>Topkapi Palace</li>
                                                <li>Bosphorus Strait</li>
                                                <li>Blue Mosque</li>
                                                <li>Gulhane Park</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className='fw-semibold'>Complete Package</p>
                                            <div className='d-flex flex-row flex-wrap my-1'>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faCalendarAlt} /> 5 Days</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faHotel} /> 5 Star Hotel Rooms</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faUtensils} /> Food</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faShuttleVan} /> Shuttle</Tag>
                                                <Tag className='mb-2 px-2'><WifiOutlined /> Wi-Fi</Tag>
                                            </div>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className='destination-price ms-2 mb-0'>$1370</p>
                                            </div>
                                            <div>
                                                <button className='btn btn-primary rounded-1 py-1 ' >Booking</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-10 mb-2 mb-2 px-2">
                                <div className="card destination-card rounded-3">
                                    <div className='destination-img-container'>
                                        <img src={maldives} className="card-img-top card-img-in-desti" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex align-items-center'>
                                                <h5 className="card-text fw-semibold">Maldives</h5>
                                                <div className='line-card ms-4'></div>
                                            </div>
                                            <h5 className="card-text text-primary">.Dot</h5>
                                        </div>
                                        <div className='destination-description'>
                                            <p className='mb-0 pb-0 fw-semibold'>Places to Visit</p>
                                            <ul className='places-visit mb-0 '>
                                                <li>Scuba Diving</li>
                                                <li>Yourt Ride</li>
                                                <li>Beach</li>
                                                <li>Sainte-Chapelle</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className='fw-semibold'>Complete Package</p>
                                            <div className='d-flex flex-row flex-wrap my-1'>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faCalendarAlt} /> 5 Days</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faHotel} /> 5 Star Hotel Rooms</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faUtensils} /> Food</Tag>
                                                <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faShuttleVan} /> Shuttle</Tag>
                                                <Tag className='mb-2 px-2'><WifiOutlined /> Wi-Fi</Tag>
                                            </div>
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className='destination-price ms-2 mb-0'>$1570</p>
                                            </div>
                                            <div>
                                                <button className='btn btn-primary rounded-1 py-1 ' >Booking</button>
                                            </div>
                                        </div>
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
