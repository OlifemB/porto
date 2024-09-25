import { useState, useEffect } from 'react'

export const useWindowSize = () => {
    const isWindowClient = typeof window === 'object'

    const [windowSize, setWindowSize] = useState({
        width: isWindowClient ? window.innerWidth : undefined,
        height: isWindowClient ? window.innerHeight : undefined,
    })

    useEffect(() => {
        function setSize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        if (isWindowClient) {
            window.addEventListener('resize', setSize)

            return () => window.removeEventListener('resize', setSize)
        }
    }, [isWindowClient, setWindowSize])

    return windowSize
}
