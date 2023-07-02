import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const form = useRef();

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration (in milliseconds)
            easing: 'ease-in-sine', // Animation easing
            once: false, // Only animate elements once
            mirror: true, // Animate elements on both scroll up and scroll down
        });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x2y67o8', 'template_4rmx4wn', form.current, 'Isga3c42NwkRdKHwi')
            .then((result) => {
                toast.success('Email send Successfuly')
                e.target.reset()
            }, (error) => {
                toast.error('An Accoured Error')
            });
    };




    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white' >
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-6 text-center'>
                    <h2 className='text-5xl font-bold inline border-b-4 border-gray-500'> Contact Me</h2>
                    <p className='text-xl font-semibold text-gray-500 pt-4'>Submit the form below in touch with me</p>
                </div>

                <div className='flex justify-center items-center ' >
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/3 space-y-3'>
                        <input type="text" name='from_name' placeholder='Enter Your Name' className='p-3 bg-transparent border-2 rounded-md  text-white focus:outline-none' />
                        <input type="email" name='from_email' placeholder='name@gmail.com' className='p-3 bg-transparent border-2 rounded-md  text-white focus:outline-none' />
                        <textarea name="message" className='p-3 bg-transparent border-2 rounded-md  text-white focus:outline-none' placeholder='Message' rows="8"></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300  font-bold'>Send</button>
                        <Toaster />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;