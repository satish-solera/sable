import Image from 'next/image'
import React from 'react'
import top from '../../../../public/top.png'
export const SablePartTwo = () => {
    return (
        <div  className='w-full h-72 flex my-2  justify-center' >

            <Image src={top} alt='Sable black card' />
        </div>
    )
}
