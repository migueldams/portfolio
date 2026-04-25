"use client"
import { useEffect, useRef } from 'react'
import { service } from '@/constants'

function Service() {
    const cardsRef = useRef<Array<HTMLDivElement | null>>([]); // ref type-safe

    useEffect(() => {
        const handleScroll = () => {
            if (!cardsRef.current) return;

            cardsRef.current.forEach((card, i) => {
                if (!card) return; // TS safety

                const rect = card.getBoundingClientRect();
                const offset = Math.max(0, 150 - rect.top);

                if (offset === 0) {
                    card.style.position = "sticky";
                    card.style.top = "150px";
                } else {
                    card.style.position = "relative";
                    card.style.top = "0px";
                }
            });
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);


    },[])

    return (
        <div className='w-full px-5 sm:px-10 md:w-4/5 lg:w-2/3  flex flex-col  gap-20'>
            {service.map((item, i) => (
                <div key={item.id} ref={(el) => { cardsRef.current[i] = el; }} className='w-full h-120 flex flex-col md:flex-row bg-black justify-center items-center gap-10 shadow-2xl shadow-amber-500 p-5 rounded-md ' style={{ zIndex: service.length + item.id }}>
                    <img className='w-full md:w-1/2 h-1/2 md:h-full object-cover rounded-md' src={item.imageUrl} alt="" />
                    <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center md:gap-7 md:pl-10'>
                        <p className='font-semibold text-md md:text-xl xl:text-2xl 2xl:text-4xl'>{item.title}</p>
                        <p className='text-gray-500 text-sm lg:text-md xl:text-xl'>{item.description}</p>
                        <ul>
                            {item.content.map((content: string, index: number) => (
                                <p key={index} className='text-gray-800 font-semibold text-sm lg:text-md xl:text-xl list-disc list-inside'>{content}</p>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Service