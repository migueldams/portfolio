'use client'

import React, { useEffect, useState } from 'react'

function Loading() {

    useEffect(() => {
        const timer = new Promise(resolve => setTimeout(resolve, 2000))
       
    }, [])

    return (
        <div className='flex justify-center items-center h-full w-full bg-black'>
            <p className='text-white text-2xl'>Loading...</p>
        </div>
    )
}

export default Loading