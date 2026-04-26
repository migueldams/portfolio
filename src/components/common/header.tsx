"use client";
import { navLinks } from '@/constants'
import { handleScroll} from '@/helper/navigate';
import { redirectToWhatsapp } from '@/services/redirectToWhatsapp';
import { Menu, Phone, X } from 'lucide-react';
import React, { useEffect } from 'react'

function Header() {

    const [isNav, setIsNav] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


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

        <div className={`min-h-20 md:min-h-30 transform flex flex-col items-center justify-center fixed z-100 transition-all duration-200 bg-transparent ${isNav ? `w-5/6 border-2 border-amber-500 backdrop-blur-2xl ${isMenuOpen ? "rounded-xl ": "rounded-full "}  top-10 left-5 md:left-10 lg:left-40 transform shadow-[0_0_15px_rgba(255,255,255,0.5)]` : `w-full top-0 left-0`}`}>
            <div className='w-5/6 lg:w-4/5 h-full flex justify-between items-center mx-auto'>
                <div className='flex relative'>
                    <p className='font-bold text-center text-sm md:text-xl lg:text-3xl' >DOUANLA MIGUEL</p>
                    <p className='text-amber-500 font-bold absolute top-1/2 left-1/2 transform'>dev</p>
                </div>
                <div className='hidden md:flex justify-around w-1/2 items-center'>
                    {navLinks.map((link, i) => (
                        <button key={link.name} onClick={() => handleScroll(i + 1)} className='mx-4  hover:text-amber-500 transition-all font-semibold text-sm'>{link.name}</button>
                    ))}
                </div>

                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='h-20 w-30 transform ml-10 transition-all duration-500 md:hidden flex items-center justify-center cursor-pointer text-white hover:text-black'>
                    {isMenuOpen ?<X />  :<Menu /> }
                </button>

                <div className='hidden sm:flex items-center'>
                    <button onClick={()=>redirectToWhatsapp()} className='hidden lg:flex border-2 text-sm lg:text-lg border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer'>Contact Me</button>
                    <button onClick={()=>redirectToWhatsapp()} className='lg:hidden flex border-2 text-sm lg:text-lg border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer'><Phone /> </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className=' top-20 mt-4 left-0 w-full transform transition-all duration-500 ease-in-out  bg-transparent backdrop-blur-2xl flex flex-col gap-4 items-center justify-around md:hidden'>
                    {navLinks.map((link, i) => (
                        <button key={link.name} onClick={() => handleScroll(i + 1)}  className='mx-4 w-3/4 gap-7 flex flex-col hover:text-amber-500 transition-all font-semibold text-sm'>
                            {link.name}
                            <hr className='w-3/4 border-gray-600' />
                        </button>

                    ))}
                </div>
            )}
        </div>
    )
}

export default Header