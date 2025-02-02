import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleVan, faHotel, faUtensils, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Tag } from 'antd'
import { WifiOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { useDestinationContext } from '../../../context/DestinationContext'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function Destinations() {
    const { destinations } = useDestinationContext();
    const navigate = useNavigate();

    // Mapping of facilities to their respective icons
    const facilityIcons = {
        'Hotel': <FontAwesomeIcon icon={faHotel} />,
        'Food': <FontAwesomeIcon icon={faUtensils} />,
        'Shuttle': <FontAwesomeIcon icon={faShuttleVan} />,
        'Wi-Fi': <WifiOutlined />,
    };


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
                            {destinations.map((destination, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-10 mb-2 mb-2 px-2" key={index}>
                                    <div className="card destination-card rounded-3">
                                        <div className='destination-img-container'>
                                            <img src={destination.imgUrl} className="card-img-top card-img-in-desti" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex align-items-center'>
                                                    <h5 className="card-text fw-semibold">{destination.title}</h5>
                                                    <div className='line-card ms-4'></div>
                                                </div>
                                                <h5 className="card-text text-primary">.Dot</h5>
                                            </div>
                                            <div className='destination-description'>
                                                <p className='mb-0 pb-0 fw-semibold'>Places to Visit</p>
                                                <ul className='places-visit mb-0 '>
                                                    {destination.places.map((place, index) => (
                                                        <li key={index}>{place}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='fw-semibold'>Complete Package</p>
                                                <div className='d-flex flex-row flex-wrap my-1'>
                                                    <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faCalendarAlt} /> {destination.days} Days</Tag>
                                                    {destination.facilities.map((facility, index) => (
                                                        <Tag key={index} className='mb-2 px-2'>
                                                            {facilityIcons[facility]} {facility}
                                                        </Tag>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className=" d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className='destination-price ms-2 mb-0'>${destination.price}</p>
                                                </div>
                                                <div>
                                                    <button className='btn btn-primary rounded-1 py-1 ' onClick={() => navigate('/bookings', {
                                                        state: {
                                                            destination
                                                        }
                                                    })} >Booking</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
