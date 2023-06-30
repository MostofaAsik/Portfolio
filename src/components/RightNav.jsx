import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const RightNav = () => {
    return (
        <div className='bottom-0 right-0 fixed'>
            <div >
                <Link to='home' smooth duration={400}>
                    <BsFillArrowUpCircleFill className='text-red-600' fontSize={50}></BsFillArrowUpCircleFill>
                </Link>
            </div>
        </div>
    );
};

export default RightNav;