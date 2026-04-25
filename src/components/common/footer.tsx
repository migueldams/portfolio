import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-100 flex flex-col items-center justify-between bg-gray-900 text-white">
      <div className='w-full grid grid-cols-3 gap-20 py-20'>
        <div className='flex justify-end items-center'>
          <div className='flex relative'>
            <p className='font-bold text-center text-3xl' >DOUANLA MIGUEL</p>
            <p className='text-amber-500 font-bold absolute top-1/2 left-1/2 transform'>dev</p>
          </div>
        </div>
        <div className='space-y-8'>
          <h2 className='text-2xl font-bold mb-4'>Quick Link</h2>
          <ul className='flex gap-4 items-center'>
            <li><a href="#home" className='hover:text-amber-400'>Home</a></li>
            <li><a href="#about" className='hover:text-amber-400'>About</a></li>
            <li><a href="#projects" className='hover:text-amber-400'>Projects</a></li>
            <li><a href="#contact" className='hover:text-amber-400'>Contact</a></li>
          </ul>
          <div className='w-full flex gap-8'>
            <input type="text" className="w-full p-2 border-b-2 border-amber-400 bg-transparent text-white" placeholder="Enter your email" />
            <button className="mt-2 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md">Subscribe</button>
          </div>
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold mb-4'>Contact Info</h2>
          <p className='flex gap-4'> <IoMailUnreadOutline /> Email: <a href="mailto:douanlmiguel@gmail.com" className='hover:text-amber-400'>douanlmiguel@gmail.com</a></p>
          <p className='flex gap-4'> <FaPhone /> Phone: <a href="tel:+237695410804" className='hover:text-amber-400'>+237 695 41 08 04</a></p>
          <p className='flex gap-4'> <CiLocationOn />Address: 123 awai , yaoundé</p>
        </div>
      </div>
      <div className="w-full h-16 flex items-center justify-around bg-black text-white">
        <p>© 2024 Miguel Portfolio. All rights reserved.</p>
        <div className='flex gap-4 text-white'><SiWhatsapp /><FaTiktok /><FaFacebookF /></div>
      </div>
    </div>

  )
}

export default Footer