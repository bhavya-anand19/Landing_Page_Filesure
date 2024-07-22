import React from 'react'
import Image from 'next/image'

function Card({ src, topic, text }) {
    return (
        <div className='p-4 rounded-md bg-white border-gray-200 dark:bg-gray-900 shadow-lg'>
            <div className='flex flex-col gap-3 '>
                <div className='flex flex-row gap-2'>
                    <Image src={`${src}`} priority width={30} height={35}></Image>
                    <h3 className='ml-4 mt-1 text-lg font-semibold'> {topic} </h3>
                </div>
                <div className=''>
                    {text}
                </div>

            </div>
        </div>


    )
}

export default Card