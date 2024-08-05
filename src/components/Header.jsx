import React, { useState } from 'react'; 
import page_Logo from '../assets/image/svg/logo.svg';
import mask_Group from '../assets/image/png/mask_Group.png';
import { Rounded_Line } from '../common/Icon';
const Header = () => {
    const [data, setData] = useState(false);
    function view() {
        setData(!data);
        if (data === false) {
            document.body.classList.add("Nav_slider");
        } else {
            document.body.classList.remove("Nav_slider");
        }
    }
    return (
        <div className='bg-headerBg bg-cover bg-no-repeat 2xl:bg-100% xl:px-0 lg:px-3 px-2 sm:px-0'>
            <div className='container max-w-[1164px] px-3 mx-auto'>
                <nav className='pt-[6px] pb-[8px]'>
                    <div className='flex justify-between items-center '>
                        <img className='cursor-pointer max-md:max-w-[60px] max-sm:max-w-[53px]' src={page_Logo} alt="page_Logo" />
                        <div className='flex items-center gap-[114px] max-xl:gap-[70px]'>
                            <ul className={`${data ? "right-0" : "right-[-100%]"} flex items-center justify-between z-[50] gap-[32px] max-xl:gap-[26px] max-lg:fixed max-lg:bg-headerBg bg-black max-lg:w-full max-lg:h-full max-xl:top-0 max-lg:flex-col max-lg:justify-center duration-300`}>
                                <li><a onClick={() => setData(!data)} href="#section_1" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Home</a></li>
                                <li><a onClick={() => setData(!data)} href="#section_2" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>About Us</a></li>
                                <li><a onClick={() => setData(!data)} href="#section_3" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Portfolio</a></li>
                                <li><a onClick={() => setData(!data)} href="#section_4" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Services</a></li>
                                <li><a onClick={() => setData(!data)} href="#section_5" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Testimonial</a></li>
                                <li><a onClick={() => setData(!data)} href="#section_6" className='text-nowrap font-poppins font-normal text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Contact Us</a></li>
                                <div className='max-sm:block hidden '>
                                    <div className='w-[151px] h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                                        <h3 className='font-poppins font-normal text-base leading-[24px] text-white'>Get Started</h3>
                                    </div>
                                </div>
                            </ul>
                            <div className='flex items-center gap-[100px]'>
                                <div className='w-[151px] max-sm:hidden h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                                    <h3 className='font-poppins font-normal text-base leading-[24px] text-white'>Get Started</h3>
                                </div>

                                <div onClick={view} className="menu_icon lg:hidden cross block z-50">
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
                        <img className='z-0 md:hidden pointer-events-none max-w-[325px]' src={mask_Group} alt="mask_Group" />
                    </div>
                    <h1 className='font-orbitron text-center md:text-start z-10 relative font-bold text-7xl max-md:leading-[70px] max-md:text-6xl max-sm:text-4xl leading-[93.6px] text-white md:max-w-[490px]'>Welcome to 1v2 Studio</h1>
                    <p className='font-poppins z-10 text-center md:text-start max-sm:leading-[21px] relative font-normal text-xl max-sm:text-sm leading-[32px] text-white opacity-[70%] md:max-w-[465px] pt-4'>Leading the Way in Creating Unique and Innovative Experiences on Roblox.</p>
                    <div className='flex md:justify-start justify-center'>
                        <div className='w-[151px] relative z-10 max-sm:mt-[34px] mt-[42px] h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                            <h3 className='font-poppins relative z-10 font-normal text-base leading-[24px] text-white'>Contact Us</h3>
                        </div>
                    </div>
                </div>
                <img className='absolute bottom-[105px] max-md:hidden max-sm:bottom-[15px] pointer-events-none z-0 right-0 ' src={mask_Group} alt="mask_Group" />
                <div className='absolute left-[-60px] bottom-[32px]'>
                    <Rounded_Line />
                </div>
            </div>
        </div>
    );
}
export default Header;
