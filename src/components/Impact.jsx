import React from 'react'
import our_Impact from '../assets/image/svg/our_Impact_Line.svg'
import impact_Studio from '../assets/image/webp/Impact_Studio.webp'

const Impact = () => {
  return (
    <div className=' bg-impact_Bg bg-black mt-[-2px]' >
          <div className='flex justify-center relative'>
                <h2 className='font-orbitron font-bold   text-42 leading-[54.6px] text-white about_Line_Bottom'>Our Impact</h2>
                <img src={our_Impact} alt="about_Line_Bottom" className='absolute w-full bottom-[-17px] left-0' />
            </div>
        <div className=' container max-w-[1164px] px-3 mx-auto'>
<div className='flex flex-row flex-wrap -mx-3'>
     <div>
        <h2 className=' font-orbitron font-bold text-64 leading-[83px] text-white max-w-[312px] '>What 1v2 Studio</h2>
        <img src={impact_Studio} alt="impact_Studio" />
        <div>
            <h3 className=' font-poppins font-semibold text-4xl leading-[57px]  text-gradient-to-r from-cyan-500 to-blue-500'>13  <span className=' font-poppins font-semibold text-[29px] leading-[47px] text-white'>experiences</span></h3>
        </div>
     </div>
</div>
        </div>
    </div>
  )
}

export default Impact