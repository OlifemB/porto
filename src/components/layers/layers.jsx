import React, { useEffect, useLayoutEffect } from 'react'
import { data } from './data.js'
import { gsap } from 'gsap'
import { Screen } from '../screen/screen.jsx'

export const Layers = () => {
    return data.map((section, sectionIndex) => (
        <Screen
            key={'section' + sectionIndex}
            sectionIndex={sectionIndex}
            children={section}
        />
    ))
}
