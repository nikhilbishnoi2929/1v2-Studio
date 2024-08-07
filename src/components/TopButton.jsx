import React, { useState, useEffect } from 'react';
const TopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 z-[100] right-4 w-[40px] h-[40px] bg-transparent border-[1px] border-white animate-bounce text-white rounded-[50px] shadow-lg transition-opacity custom_duration ${visible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            ↑
        </button>
    );
};
export default TopButton;
