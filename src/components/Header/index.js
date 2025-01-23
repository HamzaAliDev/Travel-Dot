import React from 'react';
import pageBg from '../../assets/pics/pagesBg.jpg';
import Navbar from './Navbar';

export default function Header(props) {
    let {title, description} = props
    return (
        <header>
            <Navbar />
            <div className='container-xxxl'>
                <div className='home-bg-img d-flex align-items-center justify-content-center' style={{ backgroundImage: `url(${pageBg})` }} >
                    <div className='position-relative ' style={{ zIndex: 2 }}>
                        <div className=' px-4 w-100'>
                            <h1 className='hero-heading'>{title}</h1>
                            <p className='hero-description'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
