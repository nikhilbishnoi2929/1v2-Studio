import React from 'react'
import bottomTextLine from '../assets/image/svg/textBottomLine.svg'
import projectSliderOne from '../assets/image/webp/projectSliderOne.webp'
import projectSliderTwo from '../assets/image/webp/projectSliderTwo.webp'
import projectSliderThree from '../assets/image/webp/projectSliderThree.webp'
import projectSliderFour from '../assets/image/webp/ProjectSliderFour.webp'
import Slider from "react-slick";
import clientsRight from '../assets/image/svg/clientRight.svg';
const Feature = () => {
    var setting_s = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 3,
        variableWidth: true,
        slidesToScroll: 1,
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
        <div className='bg-featureProject bg-cover bg-no-repeat bg-black relative mt-[-2px]' id='section_3'>
            <div className='max-w-[1440px] w-full mx-auto relative'>
                <div className='flex justify-center relative pt-[90px] max-sm:pt-9 max-md:pt-[60px] '>
                    <h2 className='font-orbitron font-bold z-20 text-42 max-sm:text-[30px] leading-[54.6px] text-white about_Line_Bottom'>Featured Projects</h2>
                    <img src={bottomTextLine} alt="about_Line_Bottom" className='absolute hidden xl:block pointer-events-none z-0 w-full bottom-[-17px] left-0' />
                </div>
                <div className='feature_Slider z-40 pt-[89px] max-sm:pt-12 max-md:pt-[60px] max-lg:pb-[90px] pb-[125px]'>
                    <Slider {...setting_s} className='h-full'>
                        <div className='bg-cardSlider w-full backdrop-blur-100 z-50 relative min-h-[461px] bg-cover max-sm:bg-100% bg-no-repeat max-w-[364px] p-5 bg-[#FFFFFF0A]' data-aos="flip-left">
                            <img className='w-[324px]' src={projectSliderOne} alt="" />
                            <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className='text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                            <h3 className='font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Dino Island</h3>
                            <p className='font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Embark on an epic adventure in Dino Island, where you can explore a prehistoric world filled with dinosaurs and hidden treasures.</p>
                        </div>
                        <div className='bg-cardSlider w-full backdrop-blur-100 z-50 relative min-h-[461px] bg-cover max-sm:bg-100% bg-no-repeat max-w-[364px] p-5 bg-[#FFFFFF0A]' data-aos="flip-left">
                            <img className='w-[324px]' src={projectSliderTwo} alt="projectSliderTwo" />
                            <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className='text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                            <h3 className='font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Lava Land</h3>
                            <p className='font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Embark on thrilling adventures in a volcanic world, featuring unique challenges and excitement, crafted exclusively for Roblox players.</p>
                        </div>
                        <div className='bg-cardSlider w-full backdrop-blur-100 z-50 relative min-h-[461px] bg-cover max-sm:bg-100% bg-no-repeat max-w-[364px] p-5 bg-[#FFFFFF0A]' data-aos="flip-left">
                            <img className='w-[324px]' src={projectSliderThree} alt="projectSliderThree" />
                            <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className='text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                            <h3 className='font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>3D Maze</h3>
                            <p className='font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Develop a 3D maze game in Roblox: a fun, challenging project that enhances creativity and problem-solving skills for students.</p>
                        </div>
                        <div className='bg-cardSlider w-full z-50 backdrop-blur-100 relative min-h-[461px] bg-cover max-sm:bg-100% bg-no-repeat max-w-[364px] p-5 bg-[#FFFFFF0A]' data-aos="flip-left">
                            <img className='w-[324px]' src={projectSliderFour} alt="projectSliderFour" />
                            <h3 className='pt-3 font-poppins font-bold text-sm leading-[18px] text-text-blue'>400+ <span className='text-white opacity-[70%] font-normal pl-[6px]'>Active Players</span> <span className=' pl-[10px]'>700+ </span> <span className='  text-white opacity-[70%] font-normal pl-[6px]'>Visits</span></h3>
                            <h3 className='font-orbitron font-bold text-2xl leading-[31.2px] text-white pt-4'>Fireplace</h3>
                            <p className='font-poppins font-normal text-lg leading-[28px] text-white opacity-[70%] max-w-[324px] pt-3'>Experience cozy and adventurous gameplay around a virtual hearth, blending relaxation and excitement uniquely on Roblox.</p>
                        </div>
                    </Slider>
                </div>
            </div>
            <img src={clientsRight} className=' absolute max-md:hidden left-[0px] z-0 top-[-219px]' alt="clients_Ellipse" />
        </div>
    )
}
export default Feature;