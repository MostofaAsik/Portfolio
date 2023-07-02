import React, { useEffect } from 'react';
import project1 from '../assets/portfolio/img1.png'
import project2 from '../assets/portfolio/img2.png'
import project3 from '../assets/portfolio/img3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration (in milliseconds)
            easing: 'ease-in-cubic', // Animation easing
            once: false, // Only animate elements once
            mirror: true, // Animate elements on both scroll up and scroll down
        });
    }, []);

    const projects = [
        {
            id: 1,
            src: project1,
            title: 'MAS sports acdemy',
            client: 'https://github.com/MostofaAsik/MAS-sports-academy-client',
            server: 'https://github.com/MostofaAsik/MAS-sports-academy-server',
            demo: 'https://sports-academy-a-12.web.app/'
        },
        {
            id: 2,
            src: project2,
            title: 'MAS toys center',
            client: 'https://github.com/MostofaAsik/MAS-Toys-Center-client',
            server: 'https://github.com/MostofaAsik/MAS-Toys-Center-server',
            demo: 'https://mas-toys-center.web.app/'
        },
        {
            id: 3,
            src: project3,
            title: 'MASter Recipe House',
            client: 'https://github.com/MostofaAsik/MASter-Recipe-House-client',
            server: 'https://github.com/MostofaAsik/MASter-Recipe-House-server',
            demo: 'https://a10-chef-recipe.web.app/'
        },
    ]

    return (
        <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <h2 className='text-5xl font-bold inline border-b-4 border-gray-500'> Projects</h2>
                    <p className='text-xl font-semibold text-gray-500 pt-4'>Check  out some of  my  work right here</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-12 ' >
                    {
                        projects.map(({ id, src, title, client, server, demo }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <div className='screen'>
                                    <img src={src} alt="project-image" />
                                </div>
                                <h2 className='font-sans mt-2'>{title} </h2>
                                <div className='flex items-center justify-between pt-6  mt-auto md:mt-auto px-2  mb-3'>
                                    <button className='  duration-200 hover:scale-105 hover:font-sans hover:underline hover:text-red-500 '>
                                        <a href={client} target='_blank'>Client</a>
                                    </button>
                                    <button className='  duration-200 hover:scale-105 hover:font-sans hover:underline hover:text-lime-500'>
                                        <a href={server} target='_blank'>Server</a>
                                    </button>
                                    <button className='  duration-200 hover:scale-105 hover:font-sans hover:underline hover:text-amber-500'>
                                        <a href={demo} target='_blank'>Demo</a>
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Projects;