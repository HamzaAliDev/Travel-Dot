import React, { useEffect, useState } from 'react';
import homeBg from '../../../assets/pics/bg-header.jpg'
import Navbar from '../../../components/Header/Navbar'
import { Button, Table } from 'antd';
import { SearchOutlined, LeftCircleOutlined, RightCircleOutlined, LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import Footer from '../../../components/Footer';
import { useNavigate } from 'react-router-dom';
import SpecialOffers from '../../../components/SpecialOffers';
import { useDestinationContext } from '../../../context/DestinationContext';
import { useBlogContext } from '../../../context/BlogContext';



const columns = (handleUpdate, handleDelete) => [
    { title: 'St#', dataIndex: 'num', key: 'num', },
    {
        title: 'Image',
        dataIndex: 'img',
        key: 'img',
        render: (url) => (
            <img src={url} alt='pic' className='rounded' style={{ height: 80, width: 80 }} />
        )
    },
    { title: 'Id', dataIndex: 'id', key: 'id', },
    { title: 'Title', dataIndex: 'title', key: 'title', },
    { title: 'Days', dataIndex: 'days', key: 'days', },
    { title: 'Price', dataIndex: 'price', key: 'price', },
    {
        title: 'Places',
        dataIndex: 'places',
        key: 'places',
        render: (places) => (
            <ul>
                {places.map((place, index) => (
                    <li key={index}>{place}</li>
                ))}
            </ul>
        ),
    },
    {
        title: 'Facilities',
        dataIndex: 'facilities',
        key: 'facilities',
        render: (facilities) => (
            <ul>
                {facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                ))}
            </ul>
        ),
    },
    {
        title: 'Action', key: 'action',
        render: (_, record) => (
            <></>
            // <Space size="middle">
            //     <button className='btn btn-sm btn-outline-warning' onClick={() => handleUpdate(record)}>Update</button>
            //     <button className='btn btn-sm btn-outline-danger' onClick={() => handleDelete(record.id)} >Delete</button>
            // </Space>
        ),
    },
];


export default function Home() {
    const { destinations } = useDestinationContext();
    const { blogs } = useBlogContext();
    const [hoverLeft, setHoverLeft] = useState(false);
    const [hoverRight, setHoverRight] = useState(false);
    const [slides, setSlides] = useState([]);
    const [searchQuery, setSearchQuery] = useState({ location: "", days: "", price: "" });
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const [searchClicked, setSearchClicked] = useState(false);
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


    // Function to split destinations into groups based on screen size
    const splitDestinations = () => {
        const screenWidth = window.innerWidth;
        let cardsPerSlide;

        if (screenWidth >= 992) {
            cardsPerSlide = 4; // Large screens
        } else if (screenWidth >= 495) {
            cardsPerSlide = 2; // Medium screens
        } else {
            cardsPerSlide = 1; // Small screens
        }

        const slides = [];
        for (let i = 0; i < destinations.length; i += cardsPerSlide) {
            slides.push(destinations.slice(i, i + cardsPerSlide));
        }

        setSlides(slides);
    };


    // Update slides on window resize
    useEffect(() => {
        splitDestinations();
        window.addEventListener("resize", splitDestinations);
        return () => window.removeEventListener("resize", splitDestinations);
    }, [destinations]);

    const handleSearchChange = e => setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value, });

    const handleSearch = () => {
        const filtered = destinations.filter((destination) => {
            const matchLocation = searchQuery.location
                ? destination.title.toLowerCase().includes(searchQuery.location.toLowerCase())
                : true;
            const matchDays = searchQuery.days
                ? destination.days === parseInt(searchQuery.days)
                : true;
            const matchPrice = searchQuery.price
                ? destination.price >= parseInt(searchQuery.price.split("-")[0]) &&
                destination.price <= parseInt(searchQuery.price.split("-")[1])
                : true;

            return matchLocation;
        });
        setSearchClicked(true);
        setFilteredDestinations(filtered);
        setSearchQuery({ location: "", days: "", price: "" });
    };


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
                            <div className='d-flex align-items-center justify-content-center mt-5 w-100'>
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
                                        <input type="text" className="form-control hero-input " placeholder="Location" name='location' value={searchQuery.location} onChange={handleSearchChange} />
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-12 mb-2 mb-lg-0 me-2">
                                        <label htmlFor="">Days</label>
                                        <input type="number" className="form-control hero-input" placeholder=" 5 days" min={0} name='days' value={searchQuery.days} onChange={handleSearchChange} />
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-sm-12  mb-2 mb-lg-0 me-2">
                                        <label htmlFor="">Price Range</label>
                                        <input type="number" className="form-control hero-input" placeholder="$150-$500" name='price' value={searchQuery.price} onChange={handleSearchChange} />
                                    </div>
                                    <div className="col-lg-2 col-md-5 col-sm-12 ms-lg-3 pt-2 d-flex align-items-center justify-content-center">
                                        <Button type="primary" className='search-btn rounded-5' icon={<SearchOutlined />} onClick={handleSearch}>Search</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            {filteredDestinations.length > 0 ? (
                                filteredDestinations.map((destination, i) => (
                                    <div key={destination.id} className="col-12 px-4">
                                        <div className="card destination-card rounded-3">
                                            <div className='card-body d-flex justify-content-between align-items-center'>
                                                <div className='d-flex align-items-center'>
                                                    <img src={destination.imgUrl} alt='pic' className='rounded-5' style={{ height: 60, width: 60 }} />
                                                    <h4 className="card-title fw-semibold mt-1 ms-2">{destination.title}</h4>
                                                </div>
                                                <button className='btn btn-primary mb-2 me-2 fw-semibold px-5' onClick={() => handleDestinationReview(destination.id)}>Visit ➝</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                searchClicked && (
                                    <div className="col-12 text-center">
                                        <p>No destinations found matching your search criteria.</p>
                                    </div>
                                )
                            )}
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
                                        {/* <Space> */}
                                        <div
                                            onMouseEnter={() => setHoverLeft(true)}
                                            onMouseLeave={() => setHoverLeft(false)}
                                            className='section-icon-pre carousel-control-prev' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                                        >
                                            {hoverLeft ? <LeftCircleFilled style={{ fontSize: 30, color: '#3e3e3e' }} /> : <LeftCircleOutlined style={{ fontSize: 30, color: 'black' }} />}
                                        </div>
                                        <div
                                            onMouseEnter={() => setHoverRight(true)}
                                            onMouseLeave={() => setHoverRight(false)}
                                            className='section-icon-next  carousel-control-next' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
                                        >
                                            {hoverRight ? <RightCircleFilled style={{ fontSize: 30, color: '#3e3e3e' }} /> : <RightCircleOutlined style={{ fontSize: 30, color: 'black' }} />}
                                        </div>
                                        {/* </Space> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel" >
                                <div className="carousel-inner py-4">
                                    {slides.map((slide, index) => (
                                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                            <div className=' d-flex flex-wrap flex-row align-items-center justify-content-center '>
                                                {slide.map((destination, i) => (
                                                    <div key={destination.id} className="col-lg-3 col-md-5 col-sm-6 mb-2 mb-lg-0 px-2">
                                                        <div className="card destination-card rounded-3">
                                                            <div className='img-container'>
                                                                <img src={destination.imgUrl} className="card-img-top" alt="..." style={{ height: 210 }} />
                                                                <div className='img-overlay d-flex  justify-content-end align-items-end'>
                                                                    <button className='overlay-btn mb-2 me-2 fw-bold pt-' onClick={handleDestinationReview}>➝</button>
                                                                </div>
                                                            </div>
                                                            <div className="card-body py-0">
                                                                <div className='d-flex align-items-center'>
                                                                    <h5 className="card-title fw-semibold mt-1">0{i + 1}</h5>
                                                                    <div className='line ms-4'></div>
                                                                </div>
                                                                <div className='d-flex justify-content-between'>
                                                                    <p className="card-text ">{destination.title}</p>
                                                                    <p className="card-text text-primary">.Dot</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* spcaial offers section */}
                    <SpecialOffers />

                    {/* blog section */}
                    <div className="container blog-section">
                        <div className="row">
                            <div className="col">
                                <h2 className='text-center fw-semibold'>Our best blog?</h2>
                                <p className='text-center'>An insight to the incredible experience in the world.</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 d-flex flex-wrap flex-row align-items-center justify-content-center">
                                {blogs.map((blog, index) => (
                                    <div key={index} className="col-lg-6 col-md-6 col-sm-12 mb-2 mb-lg-2 px-2">
                                        <div className='blog-card d-flex justify-content-between'>
                                            <div className='img-container-blog p-1'>
                                                <img src={blog.imgUrl} className='blog-img' alt="..." />
                                            </div>
                                            <div className='content-container-blog p-2'>
                                                <p className='fw-semibold'>{blog.title}</p>
                                                <p className='blog-description'>{blog.shortDescription}</p>
                                                <div className='btn-container'>
                                                    <button className='blog-read-btn' onClick={handleBlog}>Read More <span>➝</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
