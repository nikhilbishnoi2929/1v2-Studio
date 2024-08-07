import React from 'react'
import clientsSvgOne from '../assets/image/svg/Clients_svg.svg'
import { FiveStar } from '../common/Icon'
import roundedEllipse from '../assets/image/png/roundedEllipse.png'
import girlImg from '../assets/image/webp/girlImg.webp'
import Slider from "react-slick";
import clientsSvg from '../assets/image/svg/clientEllips.svg';
import clientsRight from '../assets/image/svg/clientRight.svg';
const Clients = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className='bg-clientsBg mt-[-2px] relative bg-black bg-cover bg-no-repeat'>
      <div className='flex justify-center relative pt-[87px] max-lg:pt-[79px] max-sm:pt-0 max-md:pt-[70px]'>
        <h2 className='font-orbitron font-bold text-center md:text-start text-42 z-10 max-md:text-[38px] max-sm:text-[30px] max-sm:leading-[39px] max-md:leading-[45px] leading-[54.6px] text-white about_Line_Bottom'>Clients Testimonials</h2>
        <img src={clientsSvgOne} alt="about_Line_Bottom" className='absolute h-[57px] z-0 xl:block hidden w-full bottom-[-17px] left-0' />
      </div>
      <div className='container max-w-[1164px] px-3 mx-auto pb-[89px] relative'>
        <div className='slider_clients'>
          <Slider {...settings}>
            <div className='pt-[113px] max-sm:pt-12 max-md:pt-[80px] max-lg:pt-[90px]' data-aos="zoom-in">
              <div className='mx-auto bg-debbieBg bg-no-repeat bg-100% max-lg:max-w-[700px] max-w-[1041px] max-xl:pr-[30px] max-sm:pr-[15px] max-sm:pl-[15px] max-xl:pl-[30px] pt-[42px] pr-[60px] pb-[41px] pl-[59px]'>
                <div className='flex lg:flex-row flex-wrap -mx-3 flex-col-reverse '>
                  <div className='lg:w-8/12 w-12/12 px-3 flex justify-center max-lg:pt-9 max-sm:pt-4 max-md:pt-8'>
                    <div className='flex flex-col text-center max-lg:text-start items-center lg:items-start'>
                      <h3 className='font-orbitron font-bold text-42 text-center lg:text-start max-sm:text-3xl leading-[54px] text-white max-w-[400px] gaming_After gaming_Before_2 lg:pl-5 max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px]'>Debbie Hagenes</h3>
                      <p className='max-w-[621px] opacity-[0.7] font-poppins text-center lg:text-start font-normal text-2xl max-md:text-xl max-sm:text-sm leading-[36px] text-white pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                      <div className='pt-6 text-center lg:text-start'>
                        <FiveStar />
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-4/12 w-12/12 px-3 flex justify-center lg:justify-start'>
                    <img src={girlImg} className=' max-w-[289px] cursor-pointer z-30 relative' alt="girl_img" />
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-[113px] max-sm:pt-12 max-md:pt-[80px] max-lg:pt-[90px]' data-aos="zoom-in">
              <div className='mx-auto bg-debbieBg bg-no-repeat bg-100% max-w-[1041px] max-lg:max-w-[700px] max-xl:pr-[30px] max-sm:pr-[15px] max-sm:pl-[15px] max-xl:pl-[30px] pt-[42px] pr-[60px] pb-[41px] pl-[59px]'>
                <div className='flex lg:flex-row flex-wrap -mx-3 flex-col-reverse '>
                  <div className='lg:w-8/12 w-12/12 px-3 flex justify-center max-lg:pt-9 max-sm:pt-4 max-md:pt-8'>
                    <div className='flex flex-col text-center max-lg:text-start items-center lg:items-start'>
                      <h3 className='font-orbitron font-bold text-42 text-center lg:text-start max-sm:text-3xl leading-[54px] text-white max-w-[400px] gaming_After gaming_Before_2 lg:pl-5 max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px]'>Debbie Hagenes</h3>
                      <p className='max-w-[621px] opacity-[0.7] font-poppins text-center lg:text-start font-normal text-2xl max-md:text-xl max-sm:text-sm leading-[36px] text-white pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                      <div className='pt-6 text-center lg:text-start'>
                        <FiveStar />
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-4/12 w-12/12 px-3 flex justify-center lg:justify-start'>
                    <img src={girlImg} className='cursor-pointer max-w-[289px] z-30 relative' alt="girl_img" />
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-[113px] max-sm:pt-12 max-md:pt-[80px] max-lg:pt-[90px]' data-aos="zoom-in">
              <div className='mx-auto bg-debbieBg bg-no-repeat bg-100% max-w-[1041px] max-lg:max-w-[700px] max-xl:pr-[30px] max-xl:pl-[30px] pt-[42px] pr-[60px] pb-[41px] pl-[59px]'>
                <div className='flex lg:flex-row flex-wrap -mx-3 flex-col-reverse '>
                  <div className='lg:w-8/12 w-12/12 px-3 flex justify-center max-lg:pt-9 max-sm:pt-4 max-md:pt-8'>
                    <div className='flex z-30 relative flex-col text-center max-lg:text-start items-center lg:items-start'>
                      <h3 className='font-orbitron z-30 relative font-bold text-42 text-center lg:text-start max-sm:text-3xl leading-[54px] text-white max-w-[400px] gaming_After gaming_Before_2 lg:pl-5  max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px]'>Debbie Hagenes</h3>
                      <p className='max-w-[621px] z-30 relative opacity-[0.7] font-poppins text-center lg:text-start font-normal text-2xl max-md:text-xl max-sm:text-sm leading-[36px] text-white pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                      <div className='pt-6 text-center z-30 relative lg:text-start'>
                        <FiveStar />
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-4/12 w-12/12 px-3 flex justify-center z-30 lg:justify-start'>
                    <img src={girlImg} className=' cursor-pointer z-30 relative max-w-[289px]' alt="girl_img" />
                  </div>
                </div>
              </div>
            </div>
            <div className='pt-[113px] max-sm:pt-12 max-md:pt-[80px] max-lg:pt-[90px]' data-aos="zoom-in">
              <div className='mx-auto bg-debbieBg bg-no-repeat bg-100% max-w-[1041px] max-lg:max-w-[700px]  max-xl:pr-[30px] max-xl:pl-[30px] pt-[42px] pr-[60px] pb-[41px] pl-[59px]'>
                <div className='flex lg:flex-row flex-wrap -mx-3 flex-col-reverse '>
                  <div className='lg:w-8/12 w-12/12 px-3 flex justify-center max-lg:pt-9 max-sm:pt-4 max-md:pt-8'>
                    <div className='flex flex-col z-30 relative text-center max-lg:text-start items-center lg:items-start'>
                      <h3 className='font-orbitron z-30 relative font-bold text-42 text-center lg:text-start max-sm:text-3xl leading-[54px] text-white max-w-[400px] gaming_After gaming_Before_2 lg:pl-5  max-md:text-[34px] max-md:leading-[42px] max-sm:text-[27px] max-sm:leading-[32px]'>Debbie Hagenes</h3>
                      <p className='max-w-[621px] z-30 relative opacity-[0.7] font-poppins text-center lg:text-start font-normal text-2xl max-md:text-xl max-sm:text-sm leading-[36px] text-white pt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Velit officia consequat duis enim velit mollit.</p>
                      <div className='pt-6 text-center z-30 relative lg:text-start'>
                        <FiveStar />
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-4/12 w-12/12 px-3 flex justify-center lg:justify-start'>
                    <img src={girlImg} className='cursor-pointer z-30 relative max-w-[289px]' alt="girl_img" />
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
          <img src={roundedEllipse} alt="roundedEllipse" className='max-md:hidden z-0 max-lg:hidden absolute right-[-45px] max-xl:right-[12px] bottom-[-112px]' />
      </div>
      <img src={clientsSvg} className='absolute right-[0px] max-md:hidden z-0 bottom-[-152px]' alt="clientsSvg" />
      <img src={clientsSvg} className='absolute right-[0px] max-md:hidden z-0 top-[-252px]' alt="clientsSvg" />
      <img src={clientsRight} className='absolute left-[0px] max-md:hidden z-0 bottom-[-200px]' alt="clientsRight" />
    </div>
  )
};
export default Clients;
