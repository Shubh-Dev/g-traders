import React from 'react';
import './header.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail, AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const TopBar = () => (
  <div className="hidden sm:flex justify-between px-5 py-3 bg-black">
    <div className="flex">
      <div className="text-white flex items-center">
        <BsFillTelephoneFill />
        <span className="ml-1">+91 9001003020</span>
      </div>
      <div className="text-white flex items-center">
        <AiOutlineMail />
        <span className="ml-1">Info@gopaltraders.com</span>
      </div> 
    </div>

    <div className="flex gap-6 items-cneter">
      <p className="text-white">Follow us on</p>
      <AiFillFacebook className="text-white"/>
      <FaInstagramSquare className="text-white" />

      
    </div>
  </div>

);

export default TopBar;
