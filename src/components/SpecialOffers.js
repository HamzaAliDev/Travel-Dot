import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faShuttleVan, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { Tag } from 'antd';
import { WifiOutlined } from '@ant-design/icons';
import house from '../assets/pics/house.jpg';


export default function SpecialOffers() {
    return (
        <div className="container offer-section">
            <div className="row">
                <div className="col">
                    <h2 className='text-center fw-semibold'>Special Offers</h2>
                    <p className='text-center'>From historical cities to natural spectulars,come see the best of the world!</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className=' d-flex flex-wrap flex-row align-items-center justify-content-center '>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-2 mb-lg-0 px-2">
                            <div className="card offer-card rounded-3">
                                <div className='img-container-offer p-2 position-relative'>
                                    <img src={house} className="card-img-top rounded-3" alt="..." style={{ height: 210 }} />
                                    <div className="position-absolute top-0 end-0 m-3  bg-primary text-white px-2 py-1 rounded" style={{ fontSize: 12 }}>
                                        30% off
                                    </div>
                                </div>
                                <div className="card-body pb-2 pt-0 px-3">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h5 className="card-title fw-semibold mt-1">$7,540</h5>
                                        <div className='offer-label'>For Rent</div>
                                    </div>
                                    <div className='d-flex flex-row flex-wrap my-1'>
                                        <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faBed} /> 2 beds</Tag>
                                        <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faBath} /> 1 Bath</Tag>
                                        <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faShuttleVan} /> Shuttle</Tag>
                                        <Tag className='mb-2 px-2'><WifiOutlined /> Wi-Fi</Tag>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col ">
                                            <p style={{ fontSize: 14 }}><FontAwesomeIcon icon={faLocationPin} /> 450 Vine Street # 10, Peru</p>
                                        </div>
                                    </div>
                                    <div className="row mx-2 ">
                                        <button className='btn btn-primary rounded-5 p-1 ' style={{ fontSize: 14 }}>View Details ➝</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-2 mb-lg-0 px-2">
                            <div className="card offer-card rounded-3">
                                <div className='img-container-offer p-2 position-relative'>
                                    <img src={house} className="card-img-top rounded-3" alt="..." style={{ height: 210 }} />
                                    <div className="position-absolute top-0 end-0 m-3  bg-primary text-white px-2 py-1 rounded" style={{ fontSize: 12 }}>
                                        30% off
                                    </div>
                                </div>
                                <div className="card-body pb-2 pt-0 px-3">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h5 className="card-title fw-semibold mt-1">$7,540</h5>
                                        <div className='offer-label'>For Rent</div>
                                    </div>
                                    <div className='d-flex flex-row flex-wrap my-1'>
                                        <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faBed} /> 2 beds</Tag>
                                        <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faBath} /> 1 Bath</Tag>
                                        <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faShuttleVan} /> Shuttle</Tag>
                                        <Tag className='mb-2 px-2'><WifiOutlined /> Wi-Fi</Tag>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col ">
                                            <p style={{ fontSize: 14 }}><FontAwesomeIcon icon={faLocationPin} /> 450 Vine Street # 10, Peru</p>
                                        </div>
                                    </div>
                                    <div className="row mx-2 ">
                                        <button className='btn btn-primary rounded-5 p-1 ' style={{ fontSize: 14 }}>View Details ➝</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6  mb-2 mb-lg-0 px-2">
                            <div className="card offer-card rounded-3">
                                <div className='img-container-offer p-2 position-relative'>
                                    <img src={house} className="card-img-top rounded-3" alt="..." style={{ height: 210 }} />
                                    <div className="position-absolute top-0 end-0 m-3  bg-primary text-white px-2 py-1 rounded" style={{ fontSize: 12 }}>
                                        30% off
                                    </div>
                                </div>
                                <div className="card-body pb-2 pt-0 px-3">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <h5 className="card-title fw-semibold mt-1">$7,540</h5>
                                        <div className='offer-label'>For Rent</div>
                                    </div>
                                    <div className='d-flex flex-row flex-wrap my-1'>
                                        <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faBed} /> 2 beds</Tag>
                                        <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faBath} /> 1 Bath</Tag>
                                        <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faShuttleVan} /> Shuttle</Tag>
                                        <Tag className='mb-2 px-2'><WifiOutlined /> Wi-Fi</Tag>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col ">
                                            <p style={{ fontSize: 14 }}><FontAwesomeIcon icon={faLocationPin} /> 450 Vine Street # 10, Peru</p>
                                        </div>
                                    </div>
                                    <div className="row mx-2 ">
                                        <button className='btn btn-primary rounded-5 p-1 ' style={{ fontSize: 14 }}>View Details ➝</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
