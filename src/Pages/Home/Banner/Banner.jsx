import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[650px] rounded-xl ">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] "   >
                    <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0">
                        <div className='text-white w-4/12 space-y-7 ml-7'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-red-500 hover:border-red-500 text-white hover:bg-red-600' >Discover More</button>
                                <button className='btn btn-outline hover:bg-transparent hover:border-red-200 ml-5 text-white'>Latest Project</button>
                            </div>
                        </div>
                        <div className='absolute -bottom-32 right-5'>
                            <a href="#slide6" className="btn btn-circle mr-4 bg-transparent text-white hover:text-red-600 hover:glass">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-transparent text-white hover:text-red-600 hover:glass">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] "   >
                    <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0">
                        <div className='text-white w-4/12 space-y-7 ml-7'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-red-500 hover:border-red-500 text-white hover:bg-red-600' >Discover More</button>
                                <button className='btn btn-outline hover:bg-transparent hover:border-red-200 ml-5 text-white'>Latest Project</button>
                            </div>
                        </div>
                        <div className='absolute -bottom-32 right-5'>
                            <a href="#slide1" className="btn btn-circle mr-4 bg-transparent text-white hover:text-red-600 hover:glass">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-transparent text-white hover:text-red-600 hover:glass">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] "   >
                    <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0">
                        <div className='text-white w-4/12 space-y-7 ml-7'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-red-500 hover:border-red-500 text-white hover:bg-red-600' >Discover More</button>
                                <button className='btn btn-outline hover:bg-transparent hover:border-red-200 ml-5 text-white'>Latest Project</button>
                            </div>
                        </div>
                        <div className='absolute -bottom-32 right-5'>
                            <a href="#slide2" className="btn btn-circle mr-4 bg-transparent text-white hover:text-red-600 hover:glass">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-transparent text-white hover:text-red-600 hover:glass">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] "   >
                    <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0">
                        <div className='text-white w-4/12 space-y-7 ml-7'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-red-500 hover:border-red-500 text-white hover:bg-red-600' >Discover More</button>
                                <button className='btn btn-outline hover:bg-transparent hover:border-red-200 ml-5 text-white'>Latest Project</button>
                            </div>
                        </div>
                        <div className='absolute -bottom-32 right-5'>
                            <a href="#slide3" className="btn btn-circle mr-4 bg-transparent text-white hover:text-red-600 hover:glass">❮</a>
                            <a href="#slide5" className="btn btn-circle bg-transparent text-white hover:text-red-600 hover:glass">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={img5}
                    className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] "   >
                    <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0">
                        <div className='text-white w-4/12 space-y-7 ml-7'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-red-500 hover:border-red-500 text-white hover:bg-red-600' >Discover More</button>
                                <button className='btn btn-outline hover:bg-transparent hover:border-red-200 ml-5 text-white'>Latest Project</button>
                            </div>
                        </div>
                        <div className='absolute -bottom-32 right-5'>
                            <a href="#slide4" className="btn btn-circle mr-4 bg-transparent text-white hover:text-red-600 hover:glass">❮</a>
                            <a href="#slide6" className="btn btn-circle bg-transparent text-white hover:text-red-600 hover:glass">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={img6}
                    className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] "   >
                    <div className="absolute left-5 right-5 flex -translate-y-1/2 transform bottom-0">
                        <div className='text-white w-4/12 space-y-7 ml-7'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-red-500 hover:border-red-500 text-white hover:bg-red-600' >Discover More</button>
                                <button className='btn btn-outline hover:bg-transparent hover:border-red-200 ml-5 text-white'>Latest Project</button>
                            </div>
                        </div>
                        <div className='absolute -bottom-32 right-5'>
                            <a href="#slide5" className="btn btn-circle mr-4 bg-transparent text-white hover:text-red-600 hover:glass">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-transparent text-white hover:text-red-600 hover:glass">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;