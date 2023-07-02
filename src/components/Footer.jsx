import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration (in milliseconds)
            easing: 'ease-in-sine', // Animation easing
            once: false, // Only animate elements once
            mirror: true, // Animate elements on both scroll up and scroll down
        });
    }, []);

    return (
        <div className='bg-gradient-to-b from-black to-gray-800 text-white h-16' >
            <div className='h-10 text-center p-4 py-4' >
                <p className='font-mono'>Copyright © 2023 - All right reserved </p>

            </div >
        </div >
    );
};

export default Footer;