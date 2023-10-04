import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/html.png'
import img2 from '../assets/css.png'
import img3 from '../assets/tailwind.png'
import img4 from '../assets/bs.png'
import img5 from '../assets/js.png'
import img6 from '../assets/React.png'
import img7 from '../assets/node.png'
import img8 from '../assets/firebase.png'
import img9 from '../assets/ex.png'
import img10 from '../assets/mongodb.png'
import img11 from '../assets/github.png'
import img12 from '../assets/redux.png'


const Skills = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration (in milliseconds)
            easing: 'ease-in-cubic', // Animation easing
            once: false, // Only animate elements once
            mirror: true, // Animate elements on both scroll up and scroll down
        });
    }, []);


    const skills = [
        {
            id: 1,
            src: img1,
            title: "html",
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: img2,
            title: "css",
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: img3,
            title: "Tailwind",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: img4,
            title: "Bootstrap",
            style: 'shadow-teal-500'
        },
        {
            id: 5,
            src: img5,
            title: "Javascript",
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: img6,
            title: "React",
            style: 'shadow-orange-500'
        },
        {
            id: 12,
            src: img12,
            title: "Redux",
            style: 'shadow-red-500'
        },
        {
            id: 7,
            src: img7,
            title: "Node",
            style: 'shadow-white'
        },
        {
            id: 8,
            src: img8,
            title: "Firebase",
            style: 'shadow-pink-500'
        },
        {
            id: 9,
            src: img9,
            title: "Express",
            style: 'shadow-lime-500'
        },
        {
            id: 10,
            src: img10,
            title: "Mongodb",
            style: 'shadow-emerald-500'
        },
        {
            id: 11,
            src: img11,
            title: "Github",
            style: 'shadow-orange-500'
        },

    ]

    return (
        <div name='skills' className='bg-gradient-to-b  from-gray-800 to-black w-full text-white  ' >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <h2 className='text-5xl font-bold inline border-b-4 border-gray-500'> Skills</h2>
                    <p className='text-xl font-semibold text-gray-500 pt-4'>These are the technologies I've worked with</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-12 text-center py-8 overflow-hidden' >
                    {
                        skills.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
                                <img className='w-40 mx-auto' src={src} alt="skill image" />
                                <p className='uppercase'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;