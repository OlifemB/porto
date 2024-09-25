import React, { useRef } from 'react'
import './glitch.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import { CustomEase } from 'gsap/CustomEase'
// import { RoughEase, ExpoScaleEase, SlowMo } from 'gsap/EasePack'
// import { Flip } from 'gsap/Flip'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { Observer } from 'gsap/Observer'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { Draggable } from 'gsap/Draggable'
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
// import { EaselPlugin } from 'gsap/EaselPlugin'
// import { PixiPlugin } from 'gsap/PixiPlugin'
// import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(
    useGSAP,
    // Flip,
    // ScrollTrigger,
    // Observer,
    // ScrollToPlugin,
    // Draggable,
    // MotionPathPlugin,
    // EaselPlugin,
    // PixiPlugin,
    // TextPlugin,
    // RoughEase,
    // ExpoScaleEase,
    // SlowMo,
    // CustomEase,
)

export const GlitchEffect = ({ children }) => {
    const tar = useRef()
    const tl = useRef()

    useGSAP(() => {
        tl.current = gsap
            .timeline({ repeat: -1, repeatDelay: 2 })
            .to('.glitch', 0.1, { skewX: 70, ease: 'power4.easeInOut' })
            .to('.glitch', 0.04, { skewX: 0, ease: 'power4.easeInOut' })
            .to('.glitch', 0.04, { opacity: 0 })
            .to('.glitch', 0.04, { opacity: 1 })
            .to('.glitch', 0.04, { x: -20 })
            .to('.glitch', 0.04, { x: 0 })
            .add('split', 0)
            .to('.top', 0.5, { x: -60, ease: 'power4.easeInOut' }, 'split')
            .to('.bottom', 0.5, { x: 60, ease: 'power4.easeInOut' }, 'split')
            .to('.glitch', 0.08, { className: '+=redShadow' }, 'split')
            .to('.logo', 0, { scale: 1.1 }, 'split')
            .to('.logo', 0, { scale: 1 }, '+=0.02')
            .to('.glitch', 0.08, { className: '-=redShadow' }, '+=0.09')
            .to('.glitch', 0.03, { className: '+=greenShadow' }, 'split')
            .to('.glitch', 0.03, { className: '-=greenShadow' }, '+=0.01')
            .to('.top', 0.2, { x: 0, ease: 'power4.easeInOut' })
            .to('.bottom', 0.2, { x: 0, ease: 'power4.easeInOut' })
            .to('.glitch', 0.02, { scaleY: 1.1, ease: 'power4.easeInOut' })
            .to('.glitch', 0.04, { scaleY: 1, ease: 'power4.easeInOut' })
    })

    return (
        <div className={'textCont'} ref={tar}>
            <div className={'glitch top'}>{children}</div>
            <div className={'glitch bottom'}>{children}</div>
        </div>
    )
}
