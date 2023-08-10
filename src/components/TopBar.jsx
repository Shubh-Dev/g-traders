import React from 'react';
import './header.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const TopBar = () => (
  <div className="flex justify-between px-5 py-3 bg-black">
    <div className="flex">
      <div className="text-white flex items-center">
        <BsFillTelephoneFill />
        <span className="ml-1">+91 9001003020</span>
      </div>
      <div className="text-white flex items-center">
        <AiOutlineMail />
        <span className='ml-1'>Info@gopaltraders.com</span>
      </div> 
    </div>

    <div className="header-right">
      
    </div>
  </div>

);

export default TopBar;
