import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { useBlogContext } from '../../../context/BlogContext';

export default function Blogs() {
    const { blogs } = useBlogContext();

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
                            {blogs.map((blog, index) => (
                                <div key={index} className="col-lg-5 col-md-5 col-sm-12 mb-2 mb-lg-2 px-2">
                                    <div className="card rounded-3">
                                        <div className='img-page-blog'>
                                            <img src={blog.imgUrl} className="card-img-top" alt="..." />
                                        </div>
                                        <div className="card-body mt-2 py-0">
                                            <p className='fw-semibold'>{blog.title}</p>
                                            <p className='blog-description'>{blog.detail}</p>

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
