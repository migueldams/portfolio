'use client';
import { Button } from '@/components/ui/button';
import ButtonShadow from '@/components/ui/button-shadow';
import React, { useEffect, useRef, useState } from 'react'
import fondGrill from "@/assets/grill_home.jpg"

function Scrollpage() {

    const boxRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const [scrollRatio, setScrollRatio] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const ratio = Math.min(window.scrollY / window.innerHeight, 1);
            setScrollRatio(ratio);

            if (opacity === 0) {
                if (bgRef.current) bgRef.current.style.display = "none";
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scale = 1 + 0.2 * scrollRatio * 4; // zoom max 1.2
    const opacity = 1 - scrollRatio;     // disparait au max scroll
    const translateX = -800 * scrollRatio ; // deplace a gauche au max scroll



    return (
        <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden" ref={boxRef}>
            <div ref={bgRef} style={{
                backgroundImage: `url(${fondGrill.src})`, transform: `scale(${scale})`,
                opacity: opacity
            }} className="w-full h-full bg-cover bg-center invert-100 fixed " />
            <div className="w-200 h-200 absolute top-0 left-0 bg-gradient-to-br from-amber-500 via-transparent to-transparent z-10 "></div>
            <img className="absolute top-100 right-100 float" src="https://html.webtend.net/2025/omio/assets/img/hero/hero-bg-shape2.png" alt="" />
            <div className="fixed w-2/3 z-20 flex flex-col z-20  justify-center" style={{
                transform: `translateX(${translateX}px)`,
                transition: "transform 0.1s linear",
                opacity: opacity// optionnel pour fluidité
            }}>
                <div className="w-1/2">
                    <h1 className=" text-white text-7xl font-bold">
                        Building Visions into Reality
                    </h1>
                    <p className="mt-4 text-white  max-w-xl">
                        Welcome to my portfolio! I'm Miguel, a passionate developer dedicated to transforming ideas into innovative digital solutions. Explore my projects and discover how I can bring your vision to life.
                    </p>
                </div>
                <div className="flex w-1/2 gap-15 py-10 ">
                    <ButtonShadow>Explore Projects</ButtonShadow>
                    <Button className="rounded-full font-bold text-white text-2xl bg-amber-500 hover:bg-amber-600 p-8">contact Us</Button>
                </div>
            </div>
            <div className='w-full h-300'>

            </div>
        </div>
    )
}

export default Scrollpage