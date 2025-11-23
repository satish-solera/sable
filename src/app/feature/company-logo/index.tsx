import { Heading } from '@/app/component/ui/heading'
import React from 'react'


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
        }
    ]
    return (
        <div className='py-10 flex gap-5 mx-auto justify-center '>
            {
                logoList.map((el, id) => {
                    return <Logo logo={el.logo} key={id} />
                })
            }
        </div>
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