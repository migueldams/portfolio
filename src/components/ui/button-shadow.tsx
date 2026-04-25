import React from 'react'
import { cn } from '@/lib/utils'

function ButtonShadow({children, className = ""}: {children: React.ReactNode, className?: string}) {
  return (
     <button className={`rounded-full flex justify-center items-center font-bold w-80 h-20 text-white text-2xl bg-gradient-to-r from-[#656565] to-[#e99b63] p-8 shadow-[0_0_15px_rgba(255,255,255,0.5)] relative ${cn(className)}`}>
      <div className="w-78 h-18 rounded-full bg-black absolute flex items-center justify-center">{children}</div>
    </button>
  )
}

export default ButtonShadow