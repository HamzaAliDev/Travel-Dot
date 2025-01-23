import React, { useState } from 'react';
import homeBg from '../../../assets/pics/bg-header.jpg'
import eiffel from '../../../assets/pics/eiffelTower1.jpg';
import barcelona from '../../../assets/pics/barcelona1.jpg';
import egypt from '../../../assets/pics/egypt1.jpg';
import maldives from '../../../assets/pics/Maldives1.jpg';
import house from '../../../assets/pics/house.jpg';
import tajMahal from '../../../assets/pics/tajMahal1.jpg';
import pyramids from '../../../assets/pics/pyramids1.jpg';
import chinaWall from '../../../assets/pics/chinaWall1.jpg';
import istanbul from '../../../assets/pics/istanbul1.jpg';
import Navbar from '../../../components/Header/Navbar'
import { Button, Space, Tag } from 'antd';
import { SearchOutlined, LeftCircleOutlined, RightCircleOutlined, LeftCircleFilled, RightCircleFilled, WifiOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faShuttleVan, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);
    const navigate = useNavigate();

    const handleExploreBtn = () => {
        navigate('/destinations')
    }

    const handleDestinationReview = () => {
        navigate('/destinations');
    }
    const handleBlog = () => {
        navigate('/blogs')
    }

    return (
        <>
            <Navbar />
            <main>
                <div className='container-xxxl'>
                    <div className='home-bg-img d-flex align-items-center justify-content-center' style={{ backgroundImage: `url(${homeBg})` }} >
                        <div className='position-relative ' style={{ zIndex: 2 }}>
                            <div className=' px-5 w-100'>
                                <h1 className='hero-heading'>Plan Your Trip With Travel Dot.</h1>
                                <p className='hero-description'>Travel to your favourite city with respectful of the environment</p>
                            </div>
                            <div className='text-center mt-5 w-100'>
                                <button className='btn btn-primary py-1 btn-explore' onClick={handleExploreBtn}><span>Explore Now</span></button>
                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card search-card p-4 d-flex flex-wrap flex-row rounded-4 fw-semibold w-100">
                                    <div className="col-lg-3 col-md-5 col-sm-12 mb-2 mb-lg-0 me-2">
                                        <label htmlFor="">Loaction</label>
                                        <input type="text" className="form-control hero-input " placeholder="Location" />
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-12 mb-2 mb-lg-0 me-2">
                                        <label htmlFor="">Days</label>
                                        <input type="number" className="form-control hero-input" placeholder=" 5 days" />
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-12  mb-2 mb-lg-0 me-2">
                                        <label htmlFor="">Price Range</label>
                                        <input type="number" className="form-control hero-input" placeholder="$150-$500" />
                                    </div>
                                    <div className="col-lg-2 col-md-5 col-sm-12 ms-lg-3 pt-2 d-flex align-items-center justify-content-center">
                                        <Button type="primary" className='search-btn rounded-5' icon={<SearchOutlined />}>Search</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container destination-section">
                        <div className="row">
                            <div className="col-12 d-flex flex-wrap flex-row">
                                <div className='col-9'>
                                    <h2>Popular Destinations</h2>
                                    <p>From historical cities to natural spectulars,come see the best of the world!</p>
                                </div>
                                <div className='col-3'>
                                    <div className=' carousel-container-icon'>
                                        <Space>
                                            <div
                                                onMouseEnter={() => setHoverLeft(true)}
                                                onMouseLeave={() => setHoverLeft(false)}
                                                className='section-icon-pre carousel-control-prev' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                                            >
                                                {hoverLeft ? <LeftCircleFilled style={{ fontSize: 30, color: '#3e3e3e' }} /> : <LeftCircleOutlined style={{ fontSize: 30,color: 'black' }} />}
                                            </div>
                                            <div
                                                onMouseEnter={() => setHoverRight(true)}
                                                onMouseLeave={() => setHoverRight(false)}
                                                className='section-icon-next  carousel-control-next' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
                                            >
                                                {hoverRight ? <RightCircleFilled style={{ fontSize: 30, color: '#3e3e3e' }} /> : <RightCircleOutlined style={{ fontSize: 30, color: 'black' }} />}
                                            </div>
                                        </Space>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" >
                                <div className="carousel-inner py-4">
                                    <div className="carousel-item active">
                                        <div className=' d-flex flex-wrap flex-row align-items-center justify-content-center '>
                                            <div className="col-lg-3 col-md-5 col-sm-6 mb-2 mb-lg-0 px-2">
                                                <div className="card destination-card rounded-3">
                                                    <div className='img-container'>
                                                        <img src={eiffel} className="card-img-top" alt="..." style={{ height: 210 }} />
                                                        <div className='img-overlay d-flex  justify-content-end align-items-end'>
                                                            <button className='overlay-btn mb-2 me-2 fw-bold pt-' onClick={handleDestinationReview}>➝</button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body py-0">
                                                        <div className='d-flex align-items-center'>
                                                            <h5 className="card-title fw-semibold mt-1">01</h5>
                                                            <div className='line ms-4'></div>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className="card-text ">Paris</p>
                                                            <p className="card-text text-primary">.Dot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-5 col-sm-6 mb-2 mb-lg-0 px-2">
                                                <div className="card destination-card rounded-3">
                                                    <div className='img-container'>
                                                        <img src={barcelona} className="card-img-top" alt="..." style={{ height: 210 }} />
                                                        <div className='img-overlay d-flex  justify-content-end align-items-end'>
                                                            <button className='overlay-btn mb-2 me-2 fw-bold pt-' onClick={handleDestinationReview}>➝</button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body py-0">
                                                        <div className='d-flex align-items-center'>
                                                            <h5 className="card-title fw-semibold mt-1">02</h5>
                                                            <div className='line ms-4'></div>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className="card-text ">Barcelona</p>
                                                            <p className="card-text text-primary">.Dot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-5 col-sm-6  mb-2 mb-lg-0 px-2">
                                                <div className="card destination-card rounded-3">
                                                    <div className='img-container'>
                                                        <img src={egypt} className="card-img-top" alt="..." style={{ height: 210 }} />
                                                        <div className='img-overlay d-flex  justify-content-end align-items-end'>
                                                            <button className='overlay-btn mb-2 me-2 fw-bold pt-' onClick={handleDestinationReview}>➝</button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body py-0">
                                                        <div className='d-flex align-items-center'>
                                                            <h5 className="card-title fw-semibold mt-1">03</h5>
                                                            <div className='line ms-4'></div>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className="card-text ">Egypt</p>
                                                            <p className="card-text text-primary">.Dot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-5 col-sm-6  mb-2 mb-lg-0 px-2">
                                                <div className="card destination-card rounded-3">
                                                    <div className='img-container'>
                                                        <img src={maldives} className="card-img-top" alt="..." style={{ height: 210 }} />
                                                        <div className='img-overlay d-flex  justify-content-end align-items-end'>
                                                            <button className='overlay-btn mb-2 me-2 fw-bold pt-' onClick={handleDestinationReview}>➝</button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body py-0">
                                                        <div className='d-flex align-items-center'>
                                                            <h5 className="card-title fw-semibold mt-1">04</h5>
                                                            <div className='line ms-4'></div>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className="card-text ">Maldives</p>
                                                            <p className="card-text text-primary">.Dot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className=' d-flex flex-wrap flex-row align-items-center justify-content-center '>
                                            <div className="col-lg-3 col-md-5 col-sm-6 mb-2 mb-lg-0 px-2">
                                                <div className="card destination-card rounded-3">
                                                    <div className='img-container'>
                                                        <img src={eiffel} className="card-img-top" alt="..." style={{ height: 210 }} />
                                                        <div className='img-overlay d-flex  justify-content-end align-items-end'>
                                                            <button className='overlay-btn mb-2 me-2 fw-bold pt-' onClick={handleDestinationReview}>➝</button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body py-0">
                                                        <div className='d-flex align-items-center'>
                                                            <h5 className="card-title fw-semibold mt-1">01</h5>
                                                            <div className='line ms-4'></div>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className="card-text ">Paris</p>
                                                            <p className="card-text text-primary">.Dot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-5 col-sm-6 mb-2 mb-lg-0 px-2">
                                                <div className="card destination-card rounded-3">
                                                    <div className='img-container'>
                                                        <img src={barcelona} className="card-img-top" alt="..." style={{ height: 210 }} />
                                                        <div className='img-overlay d-flex  justify-content-end align-items-end'>
                                                            <button className='overlay-btn mb-2 me-2 fw-bold pt-' onClick={handleDestinationReview}>➝</button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body py-0">
                                                        <div className='d-flex align-items-center'>
                                                            <h5 className="card-title fw-semibold mt-1">02</h5>
                                                            <div className='line ms-4'></div>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className="card-text ">Barcelona</p>
                                                            <p className="card-text text-primary">.Dot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-5 col-sm-6  mb-2 mb-lg-0 px-2">
                                                <div className="card destination-card rounded-3">
                                                    <div className='img-container'>
                                                        <img src={egypt} className="card-img-top" alt="..." style={{ height: 210 }} />
                                                        <div className='img-overlay d-flex  justify-content-end align-items-end'>
                                                            <button className='overlay-btn mb-2 me-2 fw-bold pt-' onClick={handleDestinationReview}>➝</button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body py-0">
                                                        <div className='d-flex align-items-center'>
                                                            <h5 className="card-title fw-semibold mt-1">03</h5>
                                                            <div className='line ms-4'></div>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className="card-text ">Egypt</p>
                                                            <p className="card-text text-primary">.Dot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-5 col-sm-6  mb-2 mb-lg-0 px-2">
                                                <div className="card destination-card rounded-3">
                                                    <div className='img-container'>
                                                        <img src={maldives} className="card-img-top" alt="..." style={{ height: 210 }} />
                                                        <div className='img-overlay d-flex  justify-content-end align-items-end'>
                                                            <button className='overlay-btn mb-2 me-2 fw-bold pt-' onClick={handleDestinationReview}>➝</button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body py-0">
                                                        <div className='d-flex align-items-center'>
                                                            <h5 className="card-title fw-semibold mt-1">04</h5>
                                                            <div className='line ms-4'></div>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className="card-text ">Maldives</p>
                                                            <p className="card-text text-primary">.Dot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <div className="container blog-section">
                        <div className="row">
                            <div className="col">
                                <h2 className='text-center fw-semibold'>Our best blog?</h2>
                                <p className='text-center'>An insight to the incredible experience in the world.</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12">
                                <div className=' d-flex flex-wrap flex-row align-items-center justify-content-center '>
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-2 mb-lg-2 px-2">
                                        <div className='blog-card d-flex justify-content-between'>
                                            <div className='img-container-blog p-1'>
                                                <img src={tajMahal} className='blog-img' alt="..." />
                                            </div>
                                            <div className='content-container-blog p-2'>
                                                <p className='fw-semibold'>Romantic moments in Taj Mahal</p>
                                                <p className='blog-description'>Enchanting beauty of the Taj Mahal, where love transcends time. Witness a romantic moment as the iconic monument glows with timeless passion.</p>
                                                <div className='btn-container'>
                                                    <button className='blog-read-btn' onClick={handleBlog}>Read More <span>➝</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-2 mb-lg-2 px-2">
                                        <div className='blog-card d-flex justify-content-between'>
                                            <div className='img-container-blog p-1'>
                                                <img src={pyramids} className='blog-img' alt="..." />
                                            </div>
                                            <div className='content-container-blog p-2'>
                                                <p className='fw-semibold'>Mysteries of Giza Pyramids</p>
                                                <p className='blog-description'>Step into the sands of time and explore the grandeur of the Pyramids of Giza, one of the Seven Wonders of the Ancient World. Towering above the Egyptian desert</p>
                                                <div className='btn-container'>
                                                    <button className='blog-read-btn' onClick={handleBlog}>Read More <span>➝</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-2 mb-lg-2 px-2">
                                        <div className='blog-card d-flex justify-content-between'>
                                            <div className='img-container-blog p-1'>
                                                <img src={chinaWall} className='blog-img' alt="..." />
                                            </div>
                                            <div className='content-container-blog p-2'>
                                                <p className='fw-semibold'>The Great Wall of China</p>
                                                <p className='blog-description'> Stretching over 13,000 miles across rugged landscapes, this ancient marvel weaves through mountains, deserts, and lush valleys, offering breathtaking views and a deep sense of history.</p>
                                                <div className='btn-container'>
                                                    <button className='blog-read-btn' onClick={handleBlog}>Read More <span>➝</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 mb-2 mb-lg-2 px-2">
                                        <div className='blog-card d-flex justify-content-between'>
                                            <div className='img-container-blog p-1'>
                                                <img src={istanbul} className='blog-img' alt="..." />
                                            </div>
                                            <div className='content-container-blog p-2'>
                                                <p className='fw-semibold'>Istanbul: Where East Meets West</p>
                                                <p className='blog-description'>Discover the enchanting city of Istanbul, a vibrant metropolis where the ancient and the modern coexist in perfect harmony. </p>
                                                <div className='btn-container'>
                                                    <button className='blog-read-btn' onClick={handleBlog}>Read More <span>➝</span></button>
                                                </div>
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
