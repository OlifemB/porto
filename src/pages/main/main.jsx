import React, { useRef } from 'react'
import { Hero } from '../../components/hero/hero.jsx'
import { Layout } from '../../app/layout.jsx'
import { Layers } from '../../components/layers/layers.jsx'

export const Main = () => {
    return (
        <Layout>
            <Hero />
            <Layers />
        </Layout>
    )
}
