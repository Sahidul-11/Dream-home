import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='w-full'>
                        <div className="hero w-full h-[600px]  rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/px0zY07/single-home.jpg)'}}>
                            <div className="hero-overlay bg-opacity-40  rounded-2xl"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Best Place To Find Commercial.</h1>
                                    <p className="mb-5">We are providing Best service for you ...</p>
                                    <button className="btn btn-secondary bg-[#e33324]">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// https://i.ibb.co/QCryw1k/student-house.jpg
// https://i.ibb.co/VvmhC1T/vacation.jpg
// https://i.ibb.co/0GFL6J0/urban-area.jpg
export default Banner;