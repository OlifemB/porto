import React, { useEffect, useState } from 'react'
import { useWindowSize } from '../common/hooks/useWinowSize'
import { appGlobalState } from '../store/index'
import { useRecoilState } from 'recoil'
import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../components/footer/footer.jsx'
import { LoadScreen } from '../components/loadscreen/loadscreen.jsx'

export const Layout = ({ children }) => {
    const [appState, setAppState] = useRecoilState(appGlobalState)
    const windowSize = useWindowSize()

    useEffect(() => {
        setAppState({
            ...appState,
            windowSize: windowSize,
            isMobile: windowSize.width < 1024,
        })
    }, [windowSize.width])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    if (loading) {
        return <LoadScreen />
    }

    return (
        <>
            <Navbar />
            <main className={'relative overflow-x-hidden overflow-y-scroll'}>
                {children}
            </main>
            <Footer />
        </>
    )
}
