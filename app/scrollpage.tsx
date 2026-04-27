'use client';
import { Button } from '@/components/ui/button';
import ButtonShadow from '@/components/ui/button-shadow';
import React, { useEffect, useRef } from 'react';
import { IconCloudDemo } from '@/components/common/icon-cloud-demo';

function Scrollpage() {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const bg = bgRef.current;
        const content = contentRef.current;
        if (!bg || !content) return;

        // Promotion GPU dès le départ
        bg.style.willChange = 'transform, opacity';
        content.style.willChange = 'transform, opacity';

        const handleScroll = () => {
            // Annule le frame précédent si pas encore exécuté
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

            rafRef.current = requestAnimationFrame(() => {
                const ratio = Math.min(window.scrollY / window.innerHeight, 1);

                const scale = 1 + 0.8 * ratio;       // zoom max 1.8
                const opacity = 1 - ratio;
                const translateX = -800 * ratio;

                // Manipulation DOM directe — zéro re-render React
                bg.style.transform = `scale(${scale})`;
                bg.style.opacity = String(opacity);
                bg.style.display = opacity <= 0 ? 'none' : 'block';

                content.style.transform = `translateX(${translateX}px)`;
                content.style.opacity = String(opacity);
            });
        };

        // Applique l'état initial
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div id='home' className="w-full relative h-screen flex flex-col items-center justify-center overflow-hidden" ref={boxRef}>
            {/* Background — plus de style React dynamique ici */}
            <div
                ref={bgRef}
                style={{
                    backgroundImage: `url("https://gtqfqxcacnjzrgnpnwbn.supabase.co/storage/v1/object/public/file/grill_home.jpg")`,
                }}
                className="w-full h-full bg-cover bg-center invert-100 fixed left-0 z-1"
            />

            <div className="w-200 h-200 absolute top-0 left-0 bg-gradient-to-br from-amber-500 via-transparent to-transparent z-10" />

            <IconCloudDemo />

            {/* Contenu — plus de style React dynamique ici */}
            <div
                ref={contentRef}
                className="fixed w-2/3 z-20 flex flex-col md:items-start justify-center items-center"
            >
                <div className="w-full lg:w-1/2 text-center md:text-start">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold">
                        Building Visions into Reality
                    </h1>
                    <p className="mt-4 text-sm lg:text-white max-w-xl">
                        Welcome to my portfolio! I'm Miguel, a passionate developer dedicated to
                        transforming ideas into innovative digital solutions. Explore my projects
                        and discover how I can bring your vision to life.
                    </p>
                </div>
                <div className="flex w-full flex-col md:flex-row lg:w-1/2 gap-15 py-10 items-center">
                    <ButtonShadow className='text-sm cursor-pointer'>Explore Projects</ButtonShadow>
                    <Button className="rounded-full font-bold text-white text-sm bg-amber-500 hover:bg-amber-600 p-8 cursor-pointer">
                        Contact Us
                    </Button>
                </div>
            </div>

            <div className='w-full h-300' />
        </div>
    );
}

export default Scrollpage;