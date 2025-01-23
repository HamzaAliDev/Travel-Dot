import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import tajMahal from '../../../assets/pics/tajMahal1.jpg';
import pyramid from '../../../assets/pics/pyramids1.jpg';
import chinaWall from '../../../assets/pics/chinaWall1.jpg';
import istanbul from '../../../assets/pics/istanbul1.jpg';

export default function Blogs() {
    let title = "Travel Stories and Tips";
    let description = "Explore inspiring journeys, expert advice, and travel insights from around the world."
    return (
        <>
            <Header title={title} description={description} />
            <main>
                <div className="container blog-section">
                    <div className="row">
                        <div className="col">
                            <h2 className='text-center fw-semibold'>Our best blog?</h2>
                            <p className='text-center'>An insight to the incredible experience in the world.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                            <div className=' d-flex flex-wrap  align-items-center justify-content-center '>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 mb-lg-2 px-2">
                                    <div className="card rounded-3">
                                        <div className='img-page-blog'>
                                            <img src={tajMahal} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body mt-2 py-0">
                                            <p className='fw-semibold'>Romantic Moments in Taj Mahal</p>
                                            <p className='blog-description'>Built by Emperor Shah Jahan in the 17th century as a mausoleum for his beloved wife Mumtaz Mahal, this stunning white marble structure is a symbol of eternal love.
                                            It is renowned for its exquisite architecture, intricate carvings, and beautiful gardens. The Taj Mahal is  attracts millions of visitors annually who come to admire its beauty and historical significance.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 mb-lg-2 px-2">
                                    <div className="card rounded-3">
                                        <div className='img-page-blog'>
                                            <img src={pyramid} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body mt-2 py-0">
                                            <p className='fw-semibold'>Mysteries of Giza Pyramids</p>
                                            <p className='blog-description'>Step into the sands of time and explore the grandeur of the Pyramids of Giza, one of the Seven Wonders of the Ancient World. Towering above the Egyptian desert,
                                                A journey to Giza is not just a visit to Egypt—it's a voyage into the heart of ancient civilization and one of humanity's greatest architectural achievements. these colossal structures have stood for over 4,500 years,</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 mb-lg-2 px-2">
                                    <div className="card rounded-3">
                                        <div className='img-page-blog'>
                                            <img src={chinaWall} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body mt-2 py-0">
                                            <p className='fw-semibold'>The Great Wall of China</p>
                                            <p className='blog-description'>The Great Wall of China, stretching over 13,000 miles, is one of the most famous landmarks in the world. Built to protect Chinese states from invasions,
                                                it showcases ancient engineering prowess with its massive stone and brick construction. The wall winds through rugged mountains and deserts, offering breathtaking views and a glimpse into China's rich history.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-12 mb-2 mb-lg-2 px-2">
                                    <div className="card rounded-3">
                                        <div className='img-page-blog'>
                                            <img src={istanbul} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body mt-2 py-0">
                                            <p className='fw-semibold'>Mysteries of Giza Pyramids</p>
                                            <p className='blog-description'>Istanbul, a vibrant city that straddles Europe and Asia, is a captivating blend of rich history and modern culture. Famous for its stunning architecture, including landmarks.
                                                 Istanbul offers a unique glimpse into its Ottoman and Byzantine past. Visitors can explore bustling bazaars, enjoy scenic views of the Bosphorus, and experience the city's dynamic atmosphere.</p>

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
