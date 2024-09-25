import { useEffect, useState } from 'react'

export const getRandom = (min, max = false) => (max ? Math.random() * (max - min) + min : Math.random() * min)

export const useRandom = (min, max) => {
    const [state, setState] = useState()

    useEffect(() => {
        setState(Math.random() * (max - min) + min)
    }, [])

    return Math.random() * (max - min) + min
}
