import React from 'react'
import bottom_Text_Line from '../assets/image/svg/text_Bottom_Line.svg'
import pushing_Boundaries from '../assets/image/webp/pushing_Boundaries.webp'
 import studio_Ellips from '../assets/image/svg/sludio_Ellips.svg';
 import position_Bg from '../assets/image/svg/position_Bg.svg'
 import clients_Ellips_Right from '../assets/image/svg/client_Ellips_Right.svg';
import { Rounded_Line } from '../common/Icon';
import clients_Ellips from '../assets/image/svg/client_Ellips.svg';

const Studio = () => {
    return (
        <div className=' bg-black relative mt-[-2px]' id='Section_2'>
            <div className='flex justify-center relative pt-[125px] max-lg:pt-[90px] max-md:pt-[70px] max-sm:pt-12  '>
                <h2 className='font-orbitron font-bold   text-42 max-md:text-[38px] max-sm:text-[32px] max-sm:leading-[35px] leading-[54.6px] text-white about_Line_Bottom'>About 1v2 Studio</h2>
                <img src={bottom_Text_Line} alt="about_Line_Bottom" className='absolute h-[57px] xl:block hidden w-full bottom-[-17px] left-0' />
            </div>
            <div className=' container max-w-[1164px] px-3 mx-auto pb-[9px] relative '>
                <div className='flex flex-row flex-wrap -mx-3 pt-[97px] max-md:pt-[70px] max-sm:pt-12 max-lg:pt-[90px]'>
                    <div className='lg:w-6/12 w-[100%] flex  lg:justify-start justify-center px-3'>
                        <div className=' relative'>
                        <img className=' w-full max-w-[517px] z-20 relative max-lg:max-w-[460px] max-md:max-w-[400px]' src={pushing_Boundaries} alt="pushing_Boundaries" />
                        <img src={studio_Ellips} className=' absolute top-[-140px] left-[-90px] z-0 ' alt="studio_Ellips" />
                        </div>
                           </div>
                    <div className='lg:w-6/12 w-[100%] px-3 flex items-center lg:justify-end justify-center max-lg:pt-12  '>
                        <div className=' flex flex-col max-lg:text-center max-lg:items-center  '>
                            <h3 className='font-orbitron z-30 font-bold text-38 leading-[57px] text-white max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px] '>Pushing Boundaries in  </h3>
                            <h3 className='font-orbitron  z-30 font-bold text-38 leading-[57px] text-white gaming_After gaming_Before lg:pl-5  max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px]'> Gaming Innovation  </h3>
                            <p className='max-w-[535px] z-30 font-normal text-lg leading-[28px] pt-[18px] max-sm:text-sm max-sm:leading-[20px] text-white opacity-[70%] font-poppins'>We are an indie game development studio dedicated to crafting innovative experiences on the Roblox platform. Our passion for creativity and excellence drives us to push the boundaries of what’s possible in gaming.</p>
                            <div className=' w-[151px] z-30 mt-[42px] h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                            <h3 className='font-poppins z-30 font-normal text-base leading-[24px] text-white '>Read More</h3>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className=' absolute right-[-65px] max-xl:right-3 max-md:hidden bottom-[44px] z-0'>
                <Rounded_Line/>
            </div>
            </div>
            <img src={position_Bg} className='absolute top-[24%] right-0 z-0' alt="position_Bg" />
            
            <img src={clients_Ellips} className=' absolute right-0 max-md:hidden  z-0 top-[-250px]' alt="clients_Ellips" />
        </div>
    )
}  
 

export default Studio