import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { parallaxCurrentState } from '../../store/index.js'

export const Footer = () => {
    const [current, setCurrent] = useRecoilState(parallaxCurrentState)
    const [timer, setTimer] = useState(200)
    const [isCancel, setIsCancel] = useState(false)

    const props = useSpring({
        config: { duration: 2000 },
        from: { scale: 1, backgroundColor: 'transparent' },
        to: { scale: 1.3, backgroundColor: '#996AFF/50' },
        loop: timer > 0,
        cancel: isCancel,
    })

    useEffect(() => {
        if (!timer) return

        const intervalId = setInterval(() => {
            const newTime = timer - 1

            setTimer(newTime)

            if (newTime === 0) {
                setIsCancel(true)
            }
        }, 1000)

        return () => clearInterval(intervalId)
    }, [timer])

    return (
        <footer
            className={`fixed backdrop-blur-sm bg-black/20 z-[10] left-0 right-0 text-white duration-300 
            bottom-0
            `}
        >
            <div
                className={
                    'container mx-auto flex flex-row justify-between items-center py-4 px-8'
                }
            >
                <div
                    className={
                        'text-gray-600 hover:[text-shadow:_0_0_10px_#FFF8] hover:text-gray-200 duration-300'
                    }
                >
                    <span className={'hidden lg:block'}>
                        All rights are reserved © SampleCPA
                    </span>
                </div>

                <a
                    href={'https://mediabuy.samplecpa.com/'}
                    className={
                        'border border-white rounded-lg px-8 py-2 hover:bg-primary duration-300 hikouDiagonal'
                    }
                    style={current === 10 || current === 0 ? props : null}
                >
                    Get Started Now
                </a>
            </div>
        </footer>
    )
}
