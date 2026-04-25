import { recentProjet } from '@/constants'
import React from 'react'
import { HiOutlineEyeSlash } from 'react-icons/hi2'

function Recent() {
  
    
  return (

    <div className=' w-4/5 flex justify-center gap-8  bg-gray-800 p-20 '>
      <div className='space-y-5'>
        <h2 className='text-4xl font-bold mb-6 text-white flex'>Recent <p className='text-amber-400'> Projects</p></h2>
        <p className='text-white mb-8'>Here are some of my recent projects that showcase my skills and expertise in software development. Each project demonstrates my ability to create innovative solutions and deliver high-quality results.</p>
      </div>
      <div className='grid grid-cols-2 gap-20'>
        {recentProjet.map((project) => (
          <div key={project.id} className='bg-gray-700 p-4 rounded-lg h-80 gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              <img src={project.imageUrl} alt={project.title} className='w-full h-40 object-cover rounded-lg mb-4' />
              <h3 className='text-2xl font-bold mb-2 text-white'>{project.title}</h3>
            </div>
            <div className='flex flex-col justify-center gap-4'>
              <hr />
              <p className='text-white font-semibold'>{project.date}</p>
              <div >
                <a href={project.link} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-1/2 rounded space-x-4 items-center flex cursor-context-menu '><p>View Details</p> <HiOutlineEyeSlash /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recent