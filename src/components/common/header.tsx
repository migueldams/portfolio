"use client";
import { navLinks } from '@/constants'
import React, { useEffect } from 'react'

function Header() {

    const [isNav, setIsNav] = React.useState(false);


    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY >= 180) {
                setIsNav(true)
            }
            if (window.scrollY <= 180) {
                setIsNav(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (

        <div className={` h-30 flex items-center justify-center fixed  z-50 transition-all duration-500 bg-transparent ${isNav ? "w-4/5 border-2 border-amber-500 backdrop-blur-2xl rounded-full top-10 left-40 transform shadow-[0_0_15px_rgba(255,255,255,0.5)]" : "w-full top-0 left-0"}`}>
            <div className='w-4/5 h-full flex justify-between items-center mx-auto'>
                <div className='flex relative'>
                    <p className='font-bold text-center text-3xl' >DOUANLA MIGUEL</p>
                    <p className='text-amber-500 font-bold absolute top-1/2 left-1/2 transform'>dev</p>

                </div>
                <div className='flex justify-around w-1/2 items-center'>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className='mx-4  hover:text-amber-500 transition-all font-semibold text-sm'>{link.name}</a>
                    ))}
                </div>
                <div className='flex items-center'>
                    <button className='border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all'>Contact Me</button>
                </div>
            </div>

        </div>
    )
}

export default Header