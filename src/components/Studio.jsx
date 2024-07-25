import React from 'react'
import bottom_Text_Line from '../assets/image/svg/text_Bottom_Line.svg'
import pushing_Boundaries from '../assets/image/webp/pushing_Boundaries.webp'
const Studio = () => {
    return (
        <div className=' bg-black'>
            <div className='flex justify-center relative pt-[125px]  '>
                <h2 className='font-orbitron font-bold   text-42 leading-[54.6px] text-white about_Line_Bottom'>About 1v2 Studio</h2>
                <img src={bottom_Text_Line} alt="about_Line_Bottom" className='absolute w-full bottom-[-17px] left-0' />
            </div>
            <div className=' container max-w-[1164px] px-3 mx-auto pb-[9px]  '>
                <div className='flex flex-row flex-wrap -mx-3 pt-[97px] '>
                    <div className='w-6/12 px-3'>
                        <img className=' w-full max-w-[517px]' src={pushing_Boundaries} alt="pushing_Boundaries" />
                    </div>
                    <div className='w-6/12 px-3 flex items-center'>
                        <div className=' flex flex-col '>
                            <h3 className='font-orbitron font-bold text-38 leading-[57px] text-white    '>Pushing Boundaries in  </h3>
                            <h3 className='font-orbitron font-bold text-38 leading-[57px] text-white   gaming_After gaming_Before pl-5'> Gaming Innovation  </h3>
                            <p className='max-w-[535px] font-normal text-lg leading-[28px] pt-[18px] text-white opacity-[70%] font-poppins'>We are an indie game development studio dedicated to crafting innovative experiences on the Roblox platform. Our passion for creativity and excellence drives us to push the boundaries of what’s possible in gaming.</p>
                            <div className=' max-w-[151px] mt-[42px] h-[47.19px] bg-btn_Border flex justify-center items-center cursor-pointer btn_Contact custom_duration'>
                            <h3 className='font-poppins font-normal text-base leading-[24px] text-white '>Read More</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Studio