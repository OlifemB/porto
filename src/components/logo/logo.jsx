import React, { useRef, useState } from 'react'
import LogoSVG from '../../common/vectors/OlifemLogoFull.svg?react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export const Logo = () => {
    return <LogoSVG className={'w-56 h-auto'} />
}
