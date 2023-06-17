
import img1 from '../../../assets/image/Banner/slide1.jpg'
import img2 from '../../../assets/image/Banner/slide2.jpg'
import img3 from '../../../assets/image/Banner/slide3.jpg'

const Banner = () => {



    return (
        <div className='relative'>
            <div className="carousel h-[600px] md:h-[700px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />

                    <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#000000d4] to-[#00000070] h-full w-full">

                        <div className='text-white w-full text-center md:mt-28 absolute top-1/4' data-aos="zoom-in-up">
                            <h2 className='text-4xl md:text-5xl mb-2  tracking-wider font-custom text-[#EFCF4F]'>Playing Guitar - </h2>
                            <h2 className='text-5xl md:text-9xl mb-10 tracking-wider mt-0 font-custom'>Really Easy</h2>

                            <div className='w-2/3 mx-auto'>
                                <p className='text-xl'>Unlock the Power of Music: Join Our Online Music Class Platform for an Enriching and Inspiring Learning Experience!</p>
                            </div>


                        </div>

                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-2/3">
                        <a href="#slide4" className="btn btn-circle text-slate-600 bg-[#fff] border-[#fff]">❮</a>
                        <a href="#slide2" className="btn btn-circle text-slate-600 bg-[#fff] border-[#fff]">❯</a>

                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />

                    <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#000000d4] to-[#00000070] h-full w-full">

                        <div className='text-white w-full text-center absolute top-1/4' data-aos="zoom-in-up">
                        <h2 className='text-4xl md:text-5xl mb-2  tracking-wider font-custom text-[#EFCF4F]'>Playing Guitar - </h2>
                            <h2 className='text-5xl md:text-9xl mb-10 tracking-wider mt-0 font-custom'>Really Easy</h2>

                            <div className='w-2/3 mx-auto'>
                                <p className='text-xl'>Unlock the Power of Music: Join Our Online Music Class Platform for an Enriching and Inspiring Learning Experience!</p>
                            </div>
                        </div>

                    </div>


                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-2/3">
                        <a href="#slide1" className="btn btn-circle text-slate-600 bg-[#fff] border-[#fff]">❮</a>
                        <a href="#slide3" className="btn btn-circle text-slate-600 bg-[#fff] border-[#fff]">❯</a>
                    </div>
                </div>




                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />

                    <div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#000000d4] to-[#00000070] h-full w-full md:rounded-3xl">

                        <div className='text-white w-full text-center absolute top-1/4' data-aos="zoom-in-up">
                        <h2 className='text-4xl md:text-5xl mb-2  tracking-wider font-custom text-[#EFCF4F]'>Playing Guitar - </h2>
                            <h2 className='text-5xl md:text-9xl mb-10 tracking-wider mt-0 font-custom'>Really Easy</h2>

                            <div className='w-2/3 mx-auto'>
                                <p className='text-xl'>Unlock the Power of Music: Join Our Online Music Class Platform for an Enriching and Inspiring Learning Experience!</p>
                            </div>
                        </div>

                    </div>




                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-2/3">
                        <a href="#slide2" className="btn btn-circle text-slate-600 bg-[#fff] border-[#fff]">❮</a>
                        <a href="#slide4" className="btn btn-circle text-slate-600 bg-[#fff] border-[#fff]">❯</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;