'use client';

import { carousel } from '@/constants'
import { useEffect, useRef, useState } from 'react';


function Slide() {
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
    const [slidePosition, setSlidePosition] = useState<number>(0);

    // useEffect(() => {
    //     const handleSlide = () => {
    //         if (!cardsRef.current) return;

    //         cardsRef.current.forEach((card, i) => {
    //             if (!card) return; // TS safety

    //             const rect = card.getBoundingClientRect();
    //             setSlidePosition(rect.left);


    //             if (rect.left > window.innerWidth / 3) {
    //                 card.style.height = "120px";
    //                 card.style.opacity = "1";
    //             } else if (rect.left < window.innerWidth / 3 || rect.left > (window.innerWidth / 3) * 2) {
    //                 card.style.height = "40px";
    //                 card.style.opacity = "0.7";
    //             }
    //         });
    //     }

    //     handleSlide(); // initial call to set the correct state on load

    // }, [slidePosition])


    return (
        <div className="h-80 flex w-max items-center justify-start gap-30 Carousel-container hover:animate-scroll z-10 hover:paused ">
            {[...carousel, ...carousel].map((item: any, index) => (
                <div key={index} ref={(el) => { cardsRef.current[index] = el; }} className="min-w-80 min-h-40 object-cover mx-5 transition-all duration-200 group  hover:cursor-pointer flex flex-col items-center hover:paused ">
                    <img key={index} src={item.imageUrl} alt={` item ${item.id}`} className=" object-cover rounded-full hover:mb-10 group-hover:border-2 group-hover:border-gray-300 group-hover:paused" />
                    <p className="text-center mt-2 hidden group-hover:flex transition-all duration-200">{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Slide