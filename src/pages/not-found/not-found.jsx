import React from 'react'
import title from '@/common/vectors/SITE IN PROGRESS.svg?react'
import titleM from '@/common/vectors/SITE IN PROGRESS-mobile.svg?react'
import { Navbar } from '@/components/navbar/navbar'

export const NotFound = () => {
    return (
        <>
            <Navbar />
            <div
                className={
                    'flex w-full h-full items-center justify-center overflow-x-hidden relative'
                }
            >
                {Array(100)
                    .fill(null)
                    .map((item, index) => {
                        return (
                            <div
                                key={'particle' + index}
                                className={
                                    'w-4 h-4 opacity-50 text-white opacity-40'
                                }
                            ></div>
                        )
                    })}

                <div
                    id="progress"
                    className={
                        'text-6xl uppercase absolute text-white font-bold drop-shadow-lg drop-shadow-md'
                    }
                >
                    <div className={'hidden md:block'}>{title()}</div>
                    <div className={'block md:hidden'}>{titleM()}</div>
                </div>
            </div>
        </>
    )
}
