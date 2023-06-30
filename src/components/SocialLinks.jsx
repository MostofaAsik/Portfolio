import React from 'react';
import { BsFillPersonLinesFill, BsFacebook } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/Hi';


const SocialLinks = () => {

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
        , {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style: ' rounded-br-md',
            download: true,
        }

    ]

    return (
        <div className='hidden lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed'>
            <ul>
                {
                    links.map(({ id, href, child, style, download }) => (
                        <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded-lg bg-gray-500 hover:rounded-md duration-300 hover:ml-[10px]' + " " + style}>
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

export default SocialLinks;