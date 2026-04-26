

import React from 'react'
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { AnimatedList } from "@/components/ui/animated-list"
import { AnimatedListDemo } from '@/components/common/AnimateList'


function Design() {
    return (
        <div className='w-4/5 flex flex-col md:flex-row justify-center items-center py-20 gap-8'>
            <div className='w-full md:w-1/3 h-full flex justify-center'>
                <Terminal className='bg-white/15 backdrop-blur-2xl w-full full '>
                    <TypingAnimation>pnpm dlx shadcn@latest init</TypingAnimation>
                    <AnimatedSpan>✔ Preflight checks.</AnimatedSpan>
                    <AnimatedSpan>✔ Validating Tailwind CSS.</AnimatedSpan>
                    <TypingAnimation>Success! Project initialization completed.</TypingAnimation>
                </Terminal>
            </div>
            <div className='w-full md:w-2/3 h-full'>
               <AnimatedListDemo />
            </div>
        </div>
    )
}

export default Design