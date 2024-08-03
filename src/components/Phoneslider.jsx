import React from 'react'
import slider_Img_1 from '../assets/image/webp/slider_One_Img.webp'
import slider_Img_2 from '../assets/image/webp/slider_Two_Img.webp'
import slider_Img_3 from '../assets/image/webp/slider_Three_Img.webp'
import slider_Img_4 from '../assets/image/webp/slider_Four_Img.webp'
import slider_Img_5 from '../assets/image/webp/slider_Five_Img.webp'
import slider_Img_6 from '../assets/image/webp/slider_Six_Img.webp'
import Slider from "react-slick";

const Phoneslider = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        arrows: false,
        speed: 4000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className=' bg-black_Section mt-[-2px] relative z-20'>
            <div className=' max-w-[1478px] w-full mx-auto pt-[35.31px] pb-[35.31px] relative '>
                <div className='slider_center'>
                <Slider {...settings} >
                    <img className='pl-[50px] cursor-pointer' src={slider_Img_1} alt="slider_Img_1" data-aos="flip-left" />
                    <img className='pl-[50px] cursor-pointer' src={slider_Img_2} alt="slider_Img_1" data-aos="flip-right" />
                    <img className='pl-[50px] cursor-pointer' src={slider_Img_3} alt="slider_Img_1" data-aos="flip-left" />
                    <img className='pl-[50px] cursor-pointer' src={slider_Img_4} alt="slider_Img_1" data-aos="flip-right" />
                    <img className='pl-[50px] cursor-pointer' src={slider_Img_5} alt="slider_Img_1" data-aos="flip-left" />
                    <img className='pl-[50px] cursor-pointer' src={slider_Img_6} alt="slider_Img_1" data-aos="flip-right" />
                </Slider>
                </div>
            </div>
             
        </div>
    )
}

export default Phoneslider