'use client';
import { Button } from '@/components/ui/button';
import ButtonShadow from '@/components/ui/button-shadow';
import React, { useEffect, useRef } from 'react';
import { IconCloudDemo } from '@/components/common/icon-cloud-demo';

function Scrollpage() {
    const bgRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    // Hauteur de référence stable (ne change pas avec la barre iOS)
    const stableHeightRef = useRef<number>(0);

    useEffect(() => {
        const bg = bgRef.current;
        const content = contentRef.current;
        if (!bg || !content) return;

        // --- Capture de la hauteur stable au montage ---
        // On utilise documentElement.clientHeight (exclut la barre mobile iOS)
        const captureStableHeight = () => {
            stableHeightRef.current = document.documentElement.clientHeight;
        };
        captureStableHeight();

        // --- Activation GPU uniquement pendant le scroll ---
        const enableGPU = () => {
            bg.style.willChange = 'transform, opacity';
            content.style.willChange = 'transform, opacity';
        };
        const disableGPU = () => {
            bg.style.willChange = 'auto';
            content.style.willChange = 'auto';
        };

        let scrollEndTimer: ReturnType<typeof setTimeout> | null = null;

        // --- Calcule la translation X selon la largeur réelle de l'écran ---
        // Mobile : déplace de 60vw max | Desktop : 800px max
        const getMaxTranslateX = () =>
            window.innerWidth < 768
                ? window.innerWidth * 0.6
                : 800;

        const applyStyles = (scrollY: number) => {
            const refHeight = stableHeightRef.current || document.documentElement.clientHeight;

            // Clamp strict [0,1] — protège contre le bounce iOS (valeurs négatives ou > 1)
            const ratio = Math.min(Math.max(scrollY / refHeight, 0), 1);

            const scale      = 1 + 0.8 * ratio;
            const opacity    = 1 - ratio;
            const translateX = -getMaxTranslateX() * ratio;

            // Background
            if (opacity <= 0) {
                bg.style.display = 'none';
            } else {
                bg.style.display = '';
                bg.style.transform = `scale(${scale})`;
                bg.style.opacity   = String(opacity);
            }

            // Contenu
            content.style.transform = `translateX(${translateX}px)`;
            content.style.opacity   = String(opacity);
            // Cache le contenu complètement pour éviter les clics fantômes
            content.style.pointerEvents = opacity <= 0 ? 'none' : '';
        };

        const handleScroll = () => {
            // Active le GPU au début du scroll
            enableGPU();

            // Annule le frame précédent si pas encore exécuté (scroll ultra-rapide)
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

            rafRef.current = requestAnimationFrame(() => {
                // Compatibilité cross-browser : pageYOffset deprecated mais fallback sûr
                const scrollY = window.scrollY ?? window.pageYOffset;
                applyStyles(scrollY);
            });

            // Désactive le GPU après 150ms d'inactivité (économie mémoire mobile)
            if (scrollEndTimer) clearTimeout(scrollEndTimer);
            scrollEndTimer = setTimeout(disableGPU, 150);
        };

        // Recalcule la hauteur stable sur resize (changement d'orientation)
        const handleResize = () => {
            captureStableHeight();
            // Réapplique immédiatement avec la nouvelle taille
            const scrollY = window.scrollY ?? window.pageYOffset;
            applyStyles(scrollY);
        };

        // État initial
        applyStyles(window.scrollY ?? window.pageYOffset);

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
            if (scrollEndTimer) clearTimeout(scrollEndTimer);
        };
    }, []);

    return (
        <div
            id="home"
            className="w-full relative flex flex-col items-center justify-center overflow-hidden"
            // dvh (dynamic viewport height) : gère la barre iOS nativement sur les navigateurs récents
            // Fallback 100vh pour les anciens
            style={{ height: '100dvh' }}
        >
            <div
                ref={bgRef}
                style={{
                    backgroundImage: `url("https://gtqfqxcacnjzrgnpnwbn.supabase.co/storage/v1/object/public/file/grill_home.jpg")`,
                    // transform3d force le compositing GPU dès le paint initial
                    transform: 'scale(1) translateZ(0)',
                }}
                className="w-full h-full bg-cover bg-center invert-100 fixed left-0 z-1"
            />

            <div className="w-200 h-200 absolute top-0 left-0 bg-gradient-to-br from-amber-500 via-transparent to-transparent z-10" />

            <IconCloudDemo />

            <div
                ref={contentRef}
                className="fixed w-2/3 z-20 flex flex-col md:items-start justify-center items-center"
                // translateZ(0) évite un repaint au 1er scroll
                style={{ transform: 'translateX(0px) translateZ(0)' }}
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
                    <ButtonShadow className="text-sm cursor-pointer">Explore Projects</ButtonShadow>
                    <Button className="rounded-full font-bold text-white text-sm bg-amber-500 hover:bg-amber-600 p-8 cursor-pointer">
                        Contact Us
                    </Button>
                </div>
            </div>

            <div className="w-full h-300" />
        </div>
    );
}

export default Scrollpage;