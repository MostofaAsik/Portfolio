import React, { useEffect } from 'react';
import { Link } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration (in milliseconds)
            easing: 'ease-in-out', // Animation easing
            once: false, // Only animate elements once
            mirror: true, // Animate elements on both scroll up and scroll down
        });
    }, []);
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' >
            <div className='max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <h2 className='text-5xl font-bold inline border-b-4 border-gray-500 '>About Me</h2>
                </div>
                <div>

                    <p className='text-justify mt-5 px-2'>
                        I am a passionate MERN Developer with expertise in HTML,CSS, Bootstrap,Tailwind CSS and various frameworks.As a junior MERN Developer,I have a strong grasp of Stripe,JWT,Node.js,Express.js, MongoDb and other robust tools.This allows me to develop seamless and efficient web applications for an enhanced user experience.I stay up-to-date with the latest industry trends by exploring cutting=edge technologies like next.js.By continuously expanding my skill set,I ensure I can deliver innovative solutions.
                    </p>
                    <Link to='contact' smooth duration={500} className=' group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold cursor-pointer mt-24 mx-auto'>
                        Contact me

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;