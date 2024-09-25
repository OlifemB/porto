import React from 'react'
import { data } from './data.js'
import { BtnContact } from '../ui/contacts.jsx'

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-[1000]">
            <div className="flex justify-between p-[32px]">
                <div className="linear-blur absolute bottom-0 left-0 w-full h-[160%] z-[-1] origin-bottom bg-gradient-to-t from-[#000] to-blue-[#0000]">
                    {data.map((item, index) => (
                        <div
                            key={'footerShadow' + index}
                            className={item.className}
                            style={item.style}
                        />
                    ))}
                </div>

                <div
                    className={
                        'container flex flex-row items-center justify-between'
                    }
                >
                    <div
                        className={
                            'text-gray-600  hover:text-gray-200 hover:[text-shadow:_0_0_10px_#FFF8] duration-300'
                        }
                    >
                        Developed by @olifem
                    </div>

                    <div className={'flex flex-row gap-4'}>
                        <BtnContact type={'tg'} />
                        <BtnContact type={'mail'} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
