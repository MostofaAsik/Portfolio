import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-6 text-center'>
                    <h2 className='text-5xl font-bold inline border-b-4 border-gray-500'> Contact Me</h2>
                    <p className='text-xl font-semibold text-gray-500 pt-4'>Submit the form below in touch with me</p>
                </div>

                <div className='flex justify-center items-center '>
                    <form action="https://getform.io/f/843e9e58-8fb7-45f5-8185-a7b609abd587" method='POST' className='flex flex-col w-full md:w-1/3 space-y-3'>
                        <input type="text" name='name' placeholder='Enter Your Name' className='p-3 bg-transparent border-2 rounded-md  text-white focus:outline-none' />
                        <input type="email" name='email' placeholder='name@gmail.com' className='p-3 bg-transparent border-2 rounded-md  text-white focus:outline-none' />
                        <textarea name="message" className='p-3 bg-transparent border-2 rounded-md  text-white focus:outline-none' placeholder='Message' rows="8"></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300  font-bold'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;