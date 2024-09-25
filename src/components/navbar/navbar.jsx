import React from 'react'
import { data } from './data.js'
import { Logo } from '../logo/logo.jsx'

export const Navbar = () => {
    return (
        <header className="fixed  top-0 left-0 right-0 z-[1000]">
            <div className="flex justify-between p-[32px]">
                <div className="linear-blur absolute top-0 left-0 w-full h-[160%] z-[-1] origin-top bg-gradient-to-b from-[#000] to-blue-[#0000]">
                    {data.map((item, index) => (
                        <div
                            key={'headerShadow' + index}
                            className={item.className}
                            style={item.style}
                        />
                    ))}
                </div>

                <div className="relative z-[100] flex gap-8 font-medium  items-center justify-between w-full container">
                    <div className={'flex flex-col gap-2'}>
                        <div
                            className={
                                'flex flex-col justify-center flex-1 gap-2 text-white'
                            }
                        >
                            <Logo />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
