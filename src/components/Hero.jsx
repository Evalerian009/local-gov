import React from 'react'
import Slider from 'react-slick';
import { heroSlide } from './constants';
import Bg1 from '../assets/hero1.jpg'

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    fade: true
  };
  return (
    <div className='relative'>
      <Slider {...settings}>
        {heroSlide.map(slide => {
          return(
          <div key={slide.id} className='h-[600px] md:h-[65vh] lg:h-[550px] xl:h-screen'>
            <div className='w-full h-full flex flex-col justify-center px-10 md:px-14 lg:px-24 text-white relative'  style={{backgroundImage: `url(${slide.img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
              <div className='w-full h-full left-0 top-0 absolute bg-[#00000052]' />
              {/* <div className='w-full h-full left-0 top-0 absolute bg-[#0596688f]' style={{clipPath: 'polygon(0 0, 80% 0, 20% 100%, 0% 100%)polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'}} /> */}
              {/* <div className='w-full h-full left-0 top-0 absolute bg-[#0596688f]' style={{clipPath: 'polygon(100% 60%, 100% 50%, 100% 100%, 80% 100%)'}} /> */}
              <div className='relative md:max-w-[500px] lg:max-w-[550px] mx-auto text-center'>
                <h1 className='text-[1.85rem] md:text-[2.45rem] lg:text-[3.2rem] font-bold leading-[45px] lg:leading-tight'>Explore our Online
 Services
& Resources</h1>
                <h2 className='text-lg mt-3'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam incidunt atque distinctio. Ipsum quisquam vel nostrum quod, eos unde tempore maiores corporis, obcaecati facilis blanditiis beatae eaque! Maxime, perspiciatis.</h2>
                <button className='w-fit mt-3 bg-sky-800 hover:bg-sky-600 px-5 py-1 rounded-sm font-semibold transition-all duration-400'>Learn More</button>
              </div>
            </div>
          </div>
          )
        })}
    </Slider>
    </div>
  )
}

export default Hero