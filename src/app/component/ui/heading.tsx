import { cn } from '@/app/util/cn-util'
import React from 'react'

export const Heading = ({ children , className }: { children: React.ReactNode , className?: string }) => {
    return (

        <h2 className={cn('text-xs md:text-3xl font-sans ' , className)}>
            {
                children
            }
        </h2>
    )
}
