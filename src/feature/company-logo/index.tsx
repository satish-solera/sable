'use client'

import { Heading } from '@/app/component/ui/heading'
import { cn } from '@/app/util/cn-util'
import { animate, motion, useMotionValue, useTransform } from 'motion/react'
import React, { useEffect } from 'react'


export const CompanyLogoAnimation = () => {

    const logoList = [
        {
            logo: 'Bloomberg'
        },
        {
            logo: 'Forbes'
        },
        {
            logo: 'Business insider'
        },
        {
            logo: 'Forbes'
        },
        {
            logo: 'Business insider'
        }
    ]


    const x = useMotionValue(0)

    useEffect(() => {
        const control = animate(x, 0.2, {
            duration: 0.2,
            ease: 'linear',
            repeat: Infinity
        })

        return control.stop
    }, [])
    const translateX = useTransform(x, (val) => `${val}px`)

    return (

        <>
            <motion.div

                initial={{
                    x: 0
                }}



                style={{
                    x: translateX
                }}

                className='py-10 flex gap-5 mx-auto justify-center '>
                {
                    logoList.map((el, id) => {
                        return <Logo logo={el.logo} key={id} />
                    })
                }
            </motion.div>



        </>
    )
}


export const Logo = ({ logo }: { logo: string }) => {
    return (

        <div className="size-1/4 bg-amber-400 h-20 flex md:flex-row justify-center items-center ">
            <Heading>
                {
                    logo}
            </Heading>
        </div >
    )
}