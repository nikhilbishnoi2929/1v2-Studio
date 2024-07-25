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
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className=' bg-black_Section mt-[-2px]'>
            <div className=' pt-[35.31px] pb-[35.31px]  '>
                <Slider {...settings}>
                    <img src={slider_Img_1} alt="slider_Img_1" />
                    <img className='pl-[50px]' src={slider_Img_2} alt="slider_Img_1" />
                    <img className='pl-[50px]' src={slider_Img_3} alt="slider_Img_1" />
                    <img className='pl-[50px]' src={slider_Img_4} alt="slider_Img_1" />
                    <img className='pl-[50px]' src={slider_Img_5} alt="slider_Img_1" />
                    <img className='pl-[50px]' src={slider_Img_6} alt="slider_Img_1" />
                </Slider>
            </div>
        </div>
    )
}

export default Phoneslider