'use client'

import { Button } from '@/app/component/ui/button'
import React from 'react'
import top from '../../../../public/top.png'
import Image from 'next/image'
import { Heading } from '@/app/component/ui/heading'
import { motion } from 'motion/react'

export const TopNavbarPart = () => {
    return (
        <motion.div className='relative  '

        >
            <motion.div className=""

                initial={{
                    y: -30,
                    opacity: 0
                }}

                whileInView={{
                    y: 0,
                    opacity: 1
                }}

                transition={{
                    duration: 0.2
                }}

            >
                <Image src={top} alt='top' className='z-0 max-h-[85dvh]' />
            </motion.div>


            <motion.div className=""

                initial={{
                    opacity: 0
                }}

                whileInView={{
                    opacity: 1
                }}

                transition={{
                    duration: 0.3
                }}
            >
                <div className="absolute inset-0 flex flex-col space-y-8 mt-28">
                    <div className=" flex justify-items-start gap-2 ">

                        <Heading className='font-bold px-2'>
                            Sable.
                        </Heading>

                        <ul className='flex gap-5 mx-auto pr-24 text-xs'>
                            <li>
                                CREDIT
                            </li>
                            <li>
                                DEBIT
                            </li>
                            <li>
                                APP
                            </li>
                            <li>LEARN</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <Heading>
                            The Fastest, most <br />
                            premium path to <br />
                            <span className='font-bold'>financial freedom</span>
                        </Heading>
                        <Button className='bg-[#6FDBD4] text-black my-4 text-xs p-4 font-semibold '>
                            EXPLORE
                        </Button>
                    </div>


                </div>

                <div className="flex gap-2 py-4 absolute bottom-6 px-2">
                    <Heading>
                        FDIE
                    </Heading>
                    <p className='text-xs items-center '>Banking services provides by Costal community Bank. Member <br />
                        FDIC.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}
