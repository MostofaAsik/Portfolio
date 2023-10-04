import React, { useEffect } from 'react';
import HeroImage from '../assets/HeroImage.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/Hi';
import { BsFillPersonLinesFill, BsArrowDownCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll'
import SocialLinks from './SocialLinks';
import LightSpeed from 'react-reveal/LightSpeed';
import { TypeAnimation } from 'react-type-animation';
import SocialLinks2 from './SocialLinks2';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration (in milliseconds)
            easing: 'ease-in-out', // Animation easing
            once: false, // Only animate elements once
            mirror: true, // Animate elements on both scroll up and scroll down
        });
    }, []);
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20 py-10 md:py-0 md:pt-0 ' >
            <div className='max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center' >
                    <h2 className='text-5xl md:text-7xl font--bold font-serif text-teal-500 mt-4 md:mt-0'>

                        Mostofa Asik

                    </h2>
                    <h3 className='text-2xl md:text-3xl text-gray-500 py-4 max-w-md'>
                        <TypeAnimation
                            sequence={[

                                "I'm a Web developer",
                                1000,
                                "I'm a Mern Stack developer",
                                1000,
                                "I'm a React  developer",
                                1000,


                            ]}
                            speed={50}
                            style={{ color: "lightcyan" }}

                            repeat={Infinity}
                        />

                    </h3>

                    <div className='flex flex-row md:flex-row gap-3'>
                        <Link to='projects' smooth duration={500} className=' group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold cursor-pointer'>
                            Projects
                            <span className='pl-2 group-hover:rotate-90 duration-300'> <HiOutlineArrowNarrowRight size={25} className='font-bold '></HiOutlineArrowNarrowRight> </span>
                        </Link>

                        <button className=' group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold cursor-pointer'>
                            <a href="/resume(1).pdf" download={true}>  Get Resume
                            </a>
                            <span className='pl-2 '> <BsArrowDownCircleFill size={25} className='font-bold '></BsArrowDownCircleFill> </span>
                        </button>

                    </div>
                    <div className='mb-20 md:mb-0' >
                        <SocialLinks2></SocialLinks2>
                    </div>
                </div>
                <div className='mt-20 md:mt-5' >
                    <img src={HeroImage} alt="My Picture" className='rounded-2xl mt-6 md:mt-0 mx-auto w-2/3  md:full' />
                </div>

            </div>


        </div>
    );
};

export default Home;