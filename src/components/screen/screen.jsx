import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const styleSection =
    'h-screen w-screen flex flex-col items-center justify-center text-white'
const styleContainer =
    'container h-screen flex flex-col items-center justify-center relative'
const styleBlock = 'flex flex-col w-[90%]  left-0 absolute gap-4 px-4'

export const Screen = ({ children, sectionIndex }) => {
    const targets = document.querySelectorAll('.content')
    const q = 3.333

    targets.forEach((el, index) => {
        gsap.from(el, {
            y: '100%',
            opacity: 0,
            ease: 'back.out',
            delay: index / q,
        })
    }, [])

    useGSAP(() => {
        targets.forEach((el, index) => {
            gsap.to(el, {
                y: '0%',
                opacity: 1,
                ease: 'back.out',
                delay: index / q,
            })
        })
    }, [])

    return (
        <div key={`section${sectionIndex}`} className={styleSection}>
            <div className={styleContainer}>
                <div className={styleBlock}>
                    {children.content.map((content, contentIndex) => (
                        <div
                            className={`${content.className} content`}
                            key={`section${sectionIndex}content${contentIndex}`}
                        >
                            {content.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
