import React from 'react'
import logo_Img from '../assets/image/svg/logo.svg'
import { Twitter_Icon } from '../common/Icon'
import { Discord_Icon } from '../common/Icon'

const Footersection = () => {
  return (
    <div className='bg-footer_bg bg-cover bg-no-repeat bg-black'>
      <div className='container max-w-[1164px] px-3 mx-auto'>
        <div className='bg-card_footer bg-cover bg-no-repeat max-w-[900px] bg-[#FFFFFF0A]  pt-[44px] pb-[45px]  flex justify-center mx-auto '>
          <div className='flex flex-col text-center  items-center'>
            <h2 className='font-orbitron font-bold text-40 leading-[63px] text-white max-w-[660px] '>Subscribe to  <span className=' after_Newsltter after_Newsltter_2'>our newsletter</span></h2>
            <p className='font-poppins font-normal text-lg leading-[28px] text-white max-w-[554px] opacity-[70%] pt-3 '>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
            <div className='max-w-[489px] border-[1px] mt-9 border-[#FFFFFF45] p-[6px] pl-[15px] flex w-full justify-between'>
              <input type="text" placeholder='Enter your email' className=' outline-none w-full mr-3 bg-transparent border-0 opacity-[70%] font-poppins text-lg leading-[28px] text-white ' />
              <div className=' max-w-[151px] w-full  h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                <h3 className='font-poppins font-normal text-base leading-[24px] text-white '>Submit Now</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center pt-[46px] pb-[43px]'>
          <div className='flex flex-col items-center text-center'>
            <img src={logo_Img} alt="logo_Img" />
            <p className=' max-w-[538px] font-poppins font-normal leading-[28px] text-lg text-white pt-5 opacity-[70%]  '>Nulla sollicitudin nullam in scelerisque. Dolor neque pulvinar porttitor id eget volutpat faucibus sed. Tellus libero.</p>
            <div className=' flex gap-[20px] pt-4'>
              <div className='border-[2.46px] border-[#3EBFFF] bg-bg_Red w-[43.05px] h-[43.05px] rounded-[50px] flex justify-center items-center'>
                <Twitter_Icon />
              </div>
              <div className='border-[2.46px] border-[#3EBFFF] bg-bg_Red w-[43.05px] h-[43.05px] rounded-[50px] flex justify-center items-center'>
                <Discord_Icon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' w-full h-[2px] bg-[#FFFFFF21]'>
      </div>
      <div className=' flex justify-center'>
      <h3 className=' font-poppins font-medium text-base leading-[24px] text-white opacity-[50%] pt-[22px] pb-[18px]'>Copyright@2024 All right reserved</h3>
      </div>
    </div>
  )
}

export default Footersection