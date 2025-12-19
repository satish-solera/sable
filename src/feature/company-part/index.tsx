
'use client'

import { Heading } from '@/app/component/ui/heading'
import Image from 'next/image'
import React from 'react'



import mobile from '../../../../public/mobile.png'
import { cn } from '@/app/util/cn-util'
import { motion } from 'motion/react'
export const CompanyPart = () => {

    const cardData = [
        {
            title: 'Get a secured credit card and bank account in 5 minutes',
            description: 'No credit history, credit check or minimum deposit required'
        },
        {
            title: 'Built your U.S. credit',
            description: 'We belive in forming positive habits, Build your U.S. credit with Sable',
            className: 'relative left-30 top-3'
        },
        {
            title: 'Get a secured credit card and bank account in 5 minutes',
            description: 'No credit history, credit check or minimum deposit required'
        },
        {
            title: 'Get a secured credit card and bank account in 5 minutes',
            description: 'No credit history, credit check or minimum deposit required',
            className: 'relative left-30'
        },

    ]
    return (
        <div className=
            'w-full bg-neutral-500/40 '>

            <div className="relative flex flex-col py-22 justify-center mx-auto items-center">
                <p className='text-[#6FDBD4]'>400,000 ACCOUNTS & COUNTING</p>
                <Heading className='font-bold'>
                    No hidden fees. No credit checks.
                </Heading>
                <Heading className='font-light'>
                    No more to building credit.
                </Heading>


                <div className="grid grid-cols-2  gap-x-98 gap-y-20 pt-10">

                    {
                        cardData.map((el, id): any => {
                            return <Card key={id} title={el.title} description={el.description} className={el.className} />
                        })

                    }

                    {/* <Card />
                    <Card className='relative left-30' />
                    <Card className='' />
                    <Card className='relative left-30' /> */}



                </div>

                <motion.div

                    // initial={{
                    //     opacity: 0, x: 20
                    // }}


                    whileInView={{
                         scale: [ 0.9 , 1],  x: [ 20 , 0]
                    }}

                    transition={{
                        duration: 0.6,
                        // ease: 'circInOut'
                    }}

                    className="absolute h-15 w-210 top-22 left-65 mx-auto transform(80deg) ">
                    <Image src={mobile} alt='mobile device png' />
                </motion.div>
            </div>
        </div>
    )
}


export const Card = ({ title, description, className }: { title: string, description: string, className?: string }) => {
    return (
        <div className={cn("w-60 h-fit p-2 wrap-break-word ", className)}>
            <Heading className=''>
                {/* Get a secured credit <br />
                card and bank account <br />
                in 5 minutes */}
                {
                    title
                }
            </Heading>
            <p>
                {
                    description
                }
            </p>

        </div>
    )
}