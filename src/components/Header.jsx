import React, { useState, useEffect } from 'react';
import pageLogo from '../assets/image/svg/logo.svg';
import maskGroup from '../assets/image/png/mask_Group.png';
import roundedEllipse from '../assets/image/png/roundedEllipse.png'
const Header = () => {
    const [data, setData] = useState(false);
    useEffect(() => {
        document.body.style.overflow = data ? "hidden" : "visible";
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [data]);
    function VIEW() {
        setData(prevData => !prevData);
    }
    return (
        <div className='bg-headerBg bg-cover bg-no-repeat 2xl:bg-100% xl:px-0 lg:px-3 px-2 sm:px-0'>
            <div className='container max-w-[1164px] px-3 mx-auto'>
                <nav className='pt-[6px] pb-[8px]'>
                    <div className='flex justify-between items-center '>
                        <a href=""> <img className='max-md:max-w-[60px] max-sm:max-w-[53px]' src={pageLogo} alt="pageLogo" /></a>
                        <div className='flex items-center gap-[114px] max-xl:gap-[70px]'>
                            <ul className={`${data ? "right-0" : "right-[-100%]"} flex items-center justify-between z-[50] gap-[32px] max-xl:gap-[26px] max-lg:fixed max-lg:bg-headerBg max-lg:w-full max-lg:h-full max-xl:top-0 max-lg:flex-col max-lg:justify-center duration-300`}>
                                <li><a onClick={() => setData(false)} href="#section_1" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Home</a></li>
                                <li><a onClick={() => setData(false)} href="#section_2" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>About Us</a></li>
                                <li><a onClick={() => setData(false)} href="#section_3" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Portfolio</a></li>
                                <li><a onClick={() => setData(false)} href="#section_4" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Services</a></li>
                                <li><a onClick={() => setData(false)} href="#section_5" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Testimonial</a></li>
                                <li><a onClick={() => setData(false)} href="#section_6" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Contact Us</a></li>
                                <div className='max-sm:block hidden'>
                                    <button className='font-poppins font-normal text-base leading-[24px] text-white w-[151px] h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>Get Started</button>
                                </div>
                            </ul>
                            <div className='flex items-center gap-[100px]'>      
                            <button  className='w-[151px] max-sm:hidden h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration font-poppins font-normal text-base leading-[24px] text-white'>Get Started</button>
                                <div onClick={VIEW} className={`${data ? "cross" : ""} lg:hidden cursor-pointer block z-50`}>
                                    <span className="bar h-[3px] block cursor-pointer bg-white w-[25px] custom_duration"></span>
                                    <span className="bar h-[3px] block cursor-pointer bg-white w-[25px] my-[6px]"></span>
                                    <span className="bar h-[3px] block cursor-pointer bg-white w-[25px] custom_duration"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container max-w-[1164px] px-3 mx-auto relative' id='section_1'>
                <div className='pt-[144px] max-md:pt-7 pb-[232px] max-md:pb-[70px] z-10'>
                    <div className='flex justify-center'>
                        <img className='z-0 md:hidden pointer-events-none max-w-[325px]' src={maskGroup} alt="maskGroup" />
                    </div>
                    <h1 className='font-orbitron text-center md:text-start z-10 relative font-bold text-7xl max-md:leading-[70px] max-md:text-6xl max-sm:text-4xl leading-[93.6px] text-white md:max-w-[490px]'>Welcome to 1v2 Studio</h1>
                    <p className='font-poppins z-10 text-center md:text-start max-sm:leading-[21px] relative font-normal text-xl max-sm:text-sm leading-[32px] text-white opacity-[70%] md:max-w-[465px] pt-4'>Leading the Way in Creating Unique and Innovative Experiences on Roblox.</p>
                    <div className='flex md:justify-start justify-center'>
                        <button className='font-poppins relative font-normal text-base leading-[24px] text-white w-[151px] z-10 max-sm:mt-[34px] mt-[42px] h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'> Contact Us</button>
                    </div>
                </div>
                <img className='absolute bottom-[105px] max-md:hidden max-sm:bottom-[15px] pointer-events-none z-0 right-0 ' src={maskGroup} alt="mask_Group" />
                   <img src={roundedEllipse} alt="roundedEllipse" className='absolute left-[-60px] bottom-[32px]'/>
            </div>
        </div>
    );
}

export default Header;
