import React, { useState } from 'react'
import FaqSvg from '../assets/image/svg/faq_Line.svg';
const Faq = () => {
    const faqs = [
        {
            question: "What is 1v2 Studio?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "How can I contact 1v2 Studio?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "Is Lenard The Lemur secure?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "What types of games does 1v2 Studio develop?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
        {
            question: "Can I collaborate with 1v2 Studio on a game project?",
            answer:
                "1v2 Studio is an indie game development studio dedicated to creating innovative and engaging experiences on the Roblox platform.",
        },
    ];
    const [activeIndex, ACCORDION_INDEX] = useState(null);
    const toggleAccordion = (index) => {
        ACCORDION_INDEX(activeIndex === index ? null : index);
    };
    return (
        <div className='bg-accordionBg bg-black bg-no-repeat bg-cover mt-[-2px] lg:pb-[55px] md:pb-[48px] max-sm:pb-[15px] pb-3' id='section_5'>
            <div className='container mx-auto px-3'>
                <div className='flex justify-center relative pt-[101px] max-lg:pt-[80px] max-md:pt-[70px] max-sm:pt-12'>
                    <h2 className='font-orbitron font-bold text-42 max-md:text-[38px] max-sm:text-[35px] max-sm:leading-[39px] max-md:leading-[45px] leading-[54.6px] text-white'>
                        FAQ
                    </h2>
                    <img
                        src={FaqSvg}
                        alt="about_Line_Bottom"
                        className='absolute pointer-events-none xl:block hidden h-[57px] w-full bottom-[-17px] left-0'
                    />
                </div>
            </div>
            <div className='container max-w-[1164px] px-3'>
                <div className='max-w-[480px] sm:max-w-[576px] z-30 md:max-w-[768px] lg:max-w-[884px] mx-auto lg:pt-[72px] md:pt-16 pt-14' data-aos="zoom-in-up">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden ease-linear ${activeIndex === index ? " z-30 border-[1px] border-sky_border bg-accordion_Color shadow_border" : "border-transparent"} mt-6`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`${activeIndex === index ? "p-[10px_10px_0px_10px] z-30 lg:p-[21px_20px_0px_20px] border-transparent" : "p-2 lg:p-[21px_20px]"} w-full text-left bg-blur_black backdrop-blur-lg flex items-center justify-between border-[1px] border-[#FFFFFF4D] transition ease-in-out `}
                            >
                                <span className="font-orbitron font-medium text-base leading-6 z-30 sm:text-lg md:text-[20px] md:leading-[26px] lg:text-2xl lg:leading-9 text-white">{faq.question}</span>
                                <span className="float-right z-30">
                                    <svg width="40" className={`${activeIndex === index ? "transform rotate-180 hidden" : ""} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="white" />
                                        <path d="M21 13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13V18.9999L13 18.9999C12.4477 18.9999 12 19.4476 12 19.9999C12 20.5522 12.4477 20.9999 13 20.9999L19 20.9999V27C19 27.5523 19.4477 28 20 28C20.5523 28 21 27.5523 21 27V20.9999L27 20.9999C27.5523 20.9999 28 20.5522 28 19.9999C28 19.4476 27.5523 18.9999 27 18.9999L21 18.9999V13Z" fill="white" />
                                    </svg>
                                    <svg className={`${activeIndex === index ? "block" : "hidden"} w-[32px] h-[32px] md:w-[40px] md:h-[40px]`} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="19.5" stroke="white" />
                                        <path d="M13 19L19 19H21L27 19C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21L21 21L19 21L13 21C12.4477 21 12 20.5523 12 20C12 19.4477 12.4477 19 13 19Z" fill="white" />
                                    </svg>
                                </span>

                            </button>
                            <div
                                className={`overflow-hidden ease-linear ${activeIndex === index ? "h-auto" : "max-h-0"
                                    }`}
                            >
                                <div className="font-poppins font-normal text-[15px] leading-[20px] lg:text-[18px] lg:leading-[28px] opacity-70 text-white max-w-[759px] p-[2px_8px_8px_8px] lg:p-[6px_20px_17px_20px]">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Faq;

