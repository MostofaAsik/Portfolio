import React from 'react';
import { BsFillPersonLinesFill, BsFacebook } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/Hi';


const SocialLinks2 = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/mostofa-asik-06ba6327b/',
            style: ' rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Facebook <BsFacebook size={30} />
                </>
            ),
            href: 'https://www.facebook.com/MAS15060',

        },
        {
            id: 3,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/MostofaAsik',

        },
        {
            id: 4,
            child: (
                <>
                    Email <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:mmostofaasik@gmail.com',

        }


    ]

    return (
        <div className='md:hidden  '>
            <ul className='grid grid-cols-2 mt-12 gap-6'>
                {
                    links.map(({ id, href, child, style, download }) => (
                        <li key={id} className={'flex flex-col justify-center items-center w-32 h-14 px-2 rounded-lg bg-gray-500 hover:rounded-md duration-300 ' + " " + style}>
                            <a href={href} className='flex justify-between items-center w-full text-white'
                                download={download}
                                target='_blank'
                                rel='noreferer'
                            >
                                {child}
                            </a>
                        </li>

                    ))
                }

            </ul>
        </div>
    );
};

export default SocialLinks2;