import React from 'react'
import page_Logo from '../assets/image/svg/logo.svg';
import mask_Group from '../assets/image/png/mask_Group.png'

const Headersection = () => {
    return (
        <div className='bg-header_Bg bg-cover bg-no-repeat 2xl:bg-100% xl:px-0 lg:px-3 px-2 sm:px-0'>
            <div className='container max-w-[1164px] px-3 mx-auto'>
                <nav className=' pt-[6px] pb-[8px]'>
                    <div className='flex justify-between items-center '>
                        <img className=' cursor-pointer' src={page_Logo} alt="page_Logo" />
                        <ul className=' flex gap-[32px] '>
                            <li><a href="" className=' font-poppins font-normal custom_duration text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Home</a></li>
                            <li><a href="" className=' font-poppins font-normal custom_duration text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>About Us</a></li>
                            <li><a href="" className=' font-poppins font-normal custom_duration text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Portfolio</a></li>
                            <li><a href="" className=' font-poppins font-normal custom_duration text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Services</a></li>
                            <li><a href="" className=' font-poppins font-normal custom_duration text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Testimonial</a></li>
                            <li><a href="" className=' font-poppins font-normal custom_duration text-white opacity-[70%] text-base leading-[24px] hover:opacity-[100%] hover:text-white custom_duration after_border after_border_b'>Contact Us</a></li>
                        </ul>
                        <div className=' max-w-[151px] w-full  h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                <h3 className='font-poppins font-normal text-base leading-[24px] text-white '>Get Started</h3>
              </div>
                    </div>
                </nav>
            </div>
            <div className='container max-w-[1164px] px-3 mx-auto'>
                <div className='flex flex-row flex-wrap -mx-3 pt-[77px] pb-[137px] '>
                    <div className='lg:w-6/12 px-3 items-center flex '>
                       <div className=' flex flex-col'>
                       <h1 className=' font-orbitron font-bold text-7xl leading-[93.6px] text-white max-w-[490px]'>Welcome to 1v2 Studio</h1>
                        <p className=' font-poppins font-normal text-xl leading-[32px] text-white opacity-[70%] max-w-[465px] pt-4 '>Leading the Way in Creating Unique and Innovative Experiences on Roblox.</p>
                        <div className=' max-w-[151px] mt-[42px] h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                            <h3 className='font-poppins font-normal text-base leading-[24px] text-white '>Contact Us</h3>
                        </div>
                       </div>
                    </div>
                    <div className='w-6/12 lg:px-3'>
                    <img src={mask_Group} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Headersection