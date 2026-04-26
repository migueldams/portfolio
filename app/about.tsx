import React from 'react'
import profil from "@/assets/imageAbout2.png"

function About() {
    return (
        <div className='w-full min-h-screen flex items-center justify-center  text-white p-8'>
            <div className='flex-col md:flex-row w-full md:w-4/5 flex items-center justify-center'>
                <div className='w-full md:w-1/2 flex flex-col items-center justify-center gap-10 p-20'>
                    <p className='text-3xl text-center font-bold mb-6'>Tchinda Douanla Miguel</p>
                    <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                        Développeur passionné et innovant avec une expertise en technologies web modernes.
                        Spécialisé dans la création de solutions digitales performantes et intuitives.
                    </p>

                    <div className='space-y-6'>
                        <div>
                            <h2 className='text-2xl font-semibold text-amber-400 mb-3'>Compétences</h2>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li>Développement Frontend (React, TypeScript, Tailwind CSS ,)</li>
                                <li>Développement Backend (Node.js, Express)</li>
                                <li>Développement Logiciel (python)</li>
                                <li>Base de données et APIs RESTful</li>
                                <li>Responsive Design et UX/UI</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold text-amber-400 mb-3'>Expertise</h2>
                            <p className='text-gray-300'>
                                Création d'applications web scalables, optimisation de performance,
                                et mise en place de bonnes pratiques de développement.
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold text-amber-400 mb-3'>Vision</h2>
                            <p className='text-gray-300'>
                                Transforming ideas into elegant digital solutions through code and creativity.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center '>
                    <img src={profil.src} alt="Profile" className="w-full md:w-3/4 h-250 rounded-full object-cover  " />
                </div>
            </div>

        </div>
    )
}

export default About