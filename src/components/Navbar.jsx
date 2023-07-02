import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
    const [nav, setNav] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration (in milliseconds)
            easing: 'ease-in-out', // Animation easing
            once: false, // Only animate elements once
            mirror: true, // Animate elements on both scroll up and scroll down
        });
    }, []);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'skills'
        },
        {
            id: 4,
            link: 'projects'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];
    return (
        <div className='flex  justify-between items-center w-full h-20 text-white bg-black fixed px-4  ' >
            <div>
                <h1 className='text-3xl md:text-5xl font-bold font-mono ml-2'>Mostofa Asik</h1>
            </div>
            <ul className='hidden md:flex'>

                {
                    links.map(({ id, link }) => (
                        <li key={id} className='px-3 cursor-pointer capitalize  font-medium text-gray-400 hover:scale-105 duration-200'>
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-3 z-10 md:hidden '>
                {
                    nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>
                }
            </div>
            {
                nav && <ul className=' flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='px-3 cursor-pointer capitalize py-6 text-4xl'> <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {link}
                            </Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    );
};

export default Navbar;