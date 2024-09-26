import React, { useEffect, useState, useContext, useRef } from 'react'
import { gsap } from 'gsap'
import { useWindowSize } from '../../common/hooks/useWinowSize.js'
import { useMousePosition } from '../../common/hooks/useMousePosition.js'
import { useGSAP } from '@gsap/react'
import { TransitionProvider } from './TransitionContext.jsx'
import { data } from './data.js'

export const Hero = () => {
    const windowSize = useWindowSize()
    const mousePosition = useMousePosition()
    const container = useRef()

    useGSAP(() => {
        if (windowSize.width > 1024) {
            const targets = document.querySelectorAll('.bg')
            const x = mousePosition.x / windowSize.width - 0.5
            const y = mousePosition.y / windowSize.height - 0.5

            targets.forEach(el => {
                const q = el.getAttribute('data-q')
                gsap.to(el, {
                    x: x * q,
                    y: y * q,
                    scale: 1.05,
                    duration: 0.5,
                })
            })
        }
    }, [mousePosition, windowSize])

    return (
        <TransitionProvider>
            <div
                ref={container}
                className={
                    'fixed top-0 flex items-center justify-center w-screen h-screen overflow-hidden scale-[1.1]'
                }
            >
                {data.map((item, index) => (
                    <div
                        key={'heroLayer' + index}
                        data-q={item.q}
                        className={item.className}
                    />
                ))}
            </div>
        </TransitionProvider>
    )
}
