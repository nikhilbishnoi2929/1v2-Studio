import React from 'react'
import bottom_Text_Line from '../assets/image/svg/text_Bottom_Line.svg'
import project_Slider_One from '../assets/image/webp/project_Slider_One.webp'
import project_Slider_two from '../assets/image/webp/project_Slider_two.webp'
import project_Slider_three from '../assets/image/webp/project_Slider_Three.webp'
import project_Slider_four from '../assets/image/webp/Project_Slider_four.webp'
import featured_Ellips from '../assets/image/svg/featured_Ellips.svg'
import Slider from "react-slick";
import clients_Ellips_Right from '../assets/image/svg/client_Ellips_Right.svg';

const Featureprojects = () => {
    var setting_s = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 3,
        variableWidth: true,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: false,
                }
            }
        ],

        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    bottom: "-48px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ul style={{ margin: "0px" }} className="custom-dots"> {dots} </ul>
            </div>
        ),
    };

    return (
        <div className=' bg-feature_Project bg-cover bg-no-repeat bg-black relative mt-[-2px]' id='section_3'>
            <div className=' max-w-[1440px] w-full mx-auto relative'>
                <div className='flex justify-center relative pt-[90px] max-sm:pt-9 max-md:pt-[60px] '>
                    <h2 className='font-orbitron font-bold  z-20  text-42 max-sm:text-[30px] leading-[54.6px] text-white about_Line_Bottom'>Featured Projects</h2>
                    <img src={bottom_Text_Line} alt="about_Line_Bottom" className='absolute hidden xl:block z-0 w-full bottom-[-17px] left-0' />
                </div>
                <div className=' feature_Slider z-40 pt-[89px] max-sm:pt-12 max-md:pt-[60px] max-lg:pb-[90px] pb-[125px] '>
                    <Slider {...setting_s} className='h-full'>
                        <div className='bg-card_Slider w-full backdrop-blur-100 z-50 relative min-h-[461px]  bg-cover max-sm:bg-100% bg-no-repeat max-w-[364px] p-5  bg-[#FFFFFF0A]' data-aos="flip-left">
                            <img className=' w-[324px] ' src={project_Slider_One} alt="" />
                            <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                            <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Dino Island</h3>
                            <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.</p>
                        </div>
                        <div className='bg-card_Slider w-full backdrop-blur-100 z-50 relative min-h-[461px] bg-cover max-sm:bg-100% bg-no-repeat max-w-[364px] p-5 bg-[#FFFFFF0A]' data-aos="flip-left">
                            <img className=' w-[324px] ' src={project_Slider_two} alt="" />
                            <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                            <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Lava Land</h3>
                            <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Embark on thrilling adventures in a volcanic world, featuring unique challenges and excitement, crafted exclusively for Roblox players.</p>
                        </div>
                        <div className='bg-card_Slider w-full backdrop-blur-100 z-50 relative min-h-[461px] bg-cover max-sm:bg-100% bg-no-repeat max-w-[364px] p-5 bg-[#FFFFFF0A]' data-aos="flip-left">
                            <img className=' w-[324px] ' src={project_Slider_three} alt="" />
                            <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                            <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>3D Maze</h3>
                            <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Develop a 3D maze game in Roblox: a fun, challenging project that enhances creativity and problem-solving skills for students.</p>
                        </div>
                        <div className='bg-card_Slider w-full z-50 backdrop-blur-100 relative min-h-[461px] bg-cover max-sm:bg-100% bg-no-repeat max-w-[364px] p-5 bg-[#FFFFFF0A]' data-aos="flip-left">
                            <img className=' w-[324px] ' src={project_Slider_four} alt="" />
                            <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className=' text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                            <h3 className=' font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Fireplace</h3>
                            <p className=' font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Experience cozy and adventurous gameplay around a virtual hearth, blending relaxation and excitement uniquely on Roblox.</p>
                        </div>


                    </Slider>
                </div>
            </div>
            <img src={clients_Ellips_Right} className=' absolute max-md:hidden left-[0px] z-0 top-[-219px]' alt="clients_Ellips" />

        </div>
    )
}

export default Featureprojects