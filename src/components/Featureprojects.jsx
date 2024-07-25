import React from 'react'
import bottom_Text_Line from '../assets/image/svg/text_Bottom_Line.svg'
import project_Slider_One from '../assets/image/webp/project_Slider_One.webp'
import project_Slider_two from '../assets/image/webp/project_Slider_two.webp'
import project_Slider_three from '../assets/image/webp/project_Slider_Three.webp'
import project_Slider_four from '../assets/image/webp/Project_Slider_four.webp'
import project_Slider_five from '../assets/image/webp/project_Slider_Five.webp'
import project_Slider_six from '../assets/image/webp/project_Slider_six.webp'
import Slider from "react-slick";

const Featureprojects = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        variableWidth: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "8px",  
                }}
            >
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "58px",
                    height: "10px",
                    opacity: "0.7",
                    color: "#FFFFFF",
                    borderRadius: "8px", 
                }}
            >
                
            </div>
        )
    };
    return (
        <div className=' bg-feature_Project bg-cover bg-no-repeat bg-black'>
            <div className='flex justify-center relative pt-[90px]  '>
                <h2 className='font-orbitron font-bold   text-42 leading-[54.6px] text-white about_Line_Bottom'>About 1v2 Studio</h2>
                <img src={bottom_Text_Line} alt="about_Line_Bottom" className='absolute w-full bottom-[-17px] left-0' />
            </div>
            <div className=' pt-[89px] pb-[125px] '>
                <Slider {...settings}>
                    <div className='bg-card_Slider mx-3 h-[461px] bg-cover bg-no-repeat max-w-[364px] h-[46 1px] p-[20px] bg-[#FFFFFF0A]'>
                        <img className=' w-[324px] ' src={project_Slider_One} alt="" />
                        <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                        <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Dino Island</h3>
                        <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.</p>
                    </div>
                    <div className='bg-card_Slider mx-3 h-[461px] bg-cover bg-no-repeat max-w-[364px] h-[46 1px] p-[20px] bg-[#FFFFFF0A]'>
                        <img className=' w-[324px] ' src={project_Slider_two} alt="" />
                        <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                        <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Lava Land</h3>
                        <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Embark on thrilling adventures in a volcanic world, featuring unique challenges and excitement, crafted exclusively for Roblox players.</p>
                    </div>
                    <div className='bg-card_Slider mx-3 h-[461px] bg-cover bg-no-repeat max-w-[364px] h-[46 1px] p-[20px] bg-[#FFFFFF0A]'>
                        <img className=' w-[324px] ' src={project_Slider_three} alt="" />
                        <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                        <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>3D Maze</h3>
                        <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Develop a 3D maze game in Roblox: a fun, challenging project that enhances creativity and problem-solving skills for students.</p>
                    </div>
                    <div className='bg-card_Slider mx-3 h-[461px] bg-cover bg-no-repeat max-w-[364px] h-[46 1px] p-[20px] bg-[#FFFFFF0A]'>
                        <img className=' w-[324px] ' src={project_Slider_four} alt="" />
                        <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                        <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Fireplace</h3>
                        <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Experience cozy and adventurous gameplay around a virtual hearth, blending relaxation and excitement uniquely on Roblox.</p>
                    </div>
                    <div className='bg-card_Slider mx-3 h-[461px] bg-cover bg-no-repeat max-w-[364px] h-[46 1px] p-[20px] bg-[#FFFFFF0A]'>
                        <img className=' w-[324px] ' src={project_Slider_five} alt="" />
                        <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                        <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Cat Washing Tycoon</h3>
                        <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Dive into the adorable world of cat care! Build and manage your own cat washing business, upgrade your facilities. </p>
                    </div>
                    <div className='bg-card_Slider mx-3 h-[461px] bg-cover bg-no-repeat max-w-[364px] h-[46 1px] p-[20px] bg-[#FFFFFF0A]'>
                        <img className=' w-[324px] ' src={project_Slider_six} alt="" />
                        <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                        <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Dino Island</h3>
                        <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Featureprojects