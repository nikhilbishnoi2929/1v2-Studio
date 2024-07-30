import React from 'react'
import logo_Img from '../assets/image/svg/logo.svg';
import { Rounded_Line, Twitter_Icon } from '../common/Icon';
import { Discord_Icon } from '../common/Icon';
import footer_Ellips from '../assets/image/svg/footer_Ellips.svg';
import ellips_Footer from '../assets/image/svg/ellips_Footer.svg';
import ellips_Footer_Two from '../assets/image/svg/ellips_Footer_Two.svg';
import ellips_Card from '../assets/image/svg/card_Bg_Ellips.svg';
import footer_Ellips_Three from '../assets/image/svg/footer_Ellipse_Three.svg';
import footer_Ellips_Four from '../assets/image/svg/footer_Ellips_Four.svg';

const Footersection = () => {
  return (
    <div className='bg-footer_bg mt-[-2px] bg-cover bg-no-repeat bg-black relative' id='Section_6'>
      <div className='container max-w-[1164px] px-3 mx-auto pt-[105px] max-lg:pt-[80px] max-md:pt-[60px] max-sm:pt-12 relative'>
        <div className='bg-card_footer backdrop:blur-(50) z-20 relative bg-100% bg-no-repeat max-w-[900px] bg-[#FFFFFF0A]  pt-[44px] pb-[45px]  flex justify-center mx-auto '>
          <div className='flex flex-col text-center  items-center'>
            <h2 className='font-orbitron z-20 relative font-bold max-md:text-[33px] max-md:leading-[40px] max-sm:text-[20px] max-sm:leading-[24px] text-40 leading-[63px] text-white max-w-[660px] '>Subscribe to  <span className='after_Newsltter after_Newsltter_2'>our newsletter</span></h2>
            <p className='font-poppins z-20 relative font-normal text-lg max-sm:text-sm leading-[28px] text-white max-w-[554px] opacity-[70%] pt-3 '>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
            <div className='max-w-[489px] z-20 relative max-sm:max-w-[320px] border-[1px] mt-9 max-sm:mt-6 border-[#FFFFFF45] p-[6px] pl-[15px] flex w-full justify-between'>
              <input type="text" placeholder='Enter your email' className=' outline-none w-full mr-3 bg-transparent border-0 opacity-[70%] font-poppins text-lg leading-[28px] text-white ' />
              <div className=' max-w-[151px]  z-20 relative w-full max-sm:hidden h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                <h3 className='font-poppins font-normal text-base leading-[24px] text-white '>Submit Now</h3>
              </div>
            </div>
              <div className=' max-w-[151px]  z-10 relative w-full sm:hidden mt-[15px] h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                <h3 className='font-poppins  z-10 relative font-normal text-base leading-[24px] text-white '>Submit Now</h3>
              </div>
          </div>
          
        </div>
        <div className='flex justify-center pt-[46px] pb-[43px]'>
          <div className='flex flex-col items-center z-10 text-center'>
            <img className=' z-10 relative' src={logo_Img} alt="logo_Img" />
            <p className=' max-w-[538px]  z-10 relative font-poppins font-normal leading-[28px] text-lg max-sm:text-sm text-white pt-5 opacity-[70%]  '>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
            <div className=' flex gap-[20px] pt-4'>
              <a href="https://x.com/?lang=en" target='blank_'  className='border-[2.46px] z-10 border-[#3EBFFF] bg-bg_Red w-[43.05px] h-[43.05px] rounded-[50px] flex justify-center items-center'>
                <Twitter_Icon />
            </a>
              <a href="https://discord.com/" target='blank_'
              className='border-[2.46px] z-10 relative border-[#3EBFFF] bg-bg_Red w-[43.05px] h-[43.05px] rounded-[50px] flex justify-center items-center'>
                <Discord_Icon />
             
              </a>
            </div>
          </div>
        </div>
        <img src={footer_Ellips} className='absolute top-[-44px] left-[280px] hidden lg:block hidden37 z-0 ' alt="footer_Ellips" />
        <img src={ellips_Card} className=' absolute max-md:hidden top-[56px] ' alt="ellips_Card" />
        <div className='left-[-67px]  max-xl:left-[15px] max-lg:hidden absolute top-[-60px]'>
        <Rounded_Line />
      </div>
      <div className='right-[-68.5px]  max-xl:right-[15px] max-lg:hidden absolute bottom-[90px]'>
        <Rounded_Line />
      </div>
      </div>
      <div className='w-full h-[2px] bg-[#FFFFFF21]'>
      </div>
      <div className='flex justify-center'>
        <h3 className=' font-poppins font-medium text-base leading-[24px] text-white opacity-[50%] pt-[22px] pb-[18px]'>Copyright@2024 All right reserved</h3>
      </div>
      
      <img className=' absolute z-0 top-[-332px] max-lg:hidden left-0' src={footer_Ellips_Three} alt="footer_Ellips_Three" />
      <img className=' absolute z-0 top-[30px] max-lg:hidden right-[30px]' src={footer_Ellips_Four} alt="footer_Ellips_Three" />

      <img src={ellips_Footer_Two} className='absolute max-lg:hidden z-0 right-0 bottom-[61px]' alt="ellips_Footer_Two " />
      <img src={ellips_Footer} className=' absolute max-lg:hidden bottom-[75px] z-0 left-0' alt="ellips_Footer" />
    </div>
  )
}

export default Footersection