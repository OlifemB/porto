import { useRecoilState } from 'recoil'

export const useRecoilModal = recoilState => {
    const [state, setState] = useRecoilState(recoilState)
    const isOpened = state.isOpened
    const toggle = () => setState({ ...state, isOpened: !state.isOpened })
    const open = () => setState({ ...state, isOpened: true })
    const close = () => setState({ ...state, isOpened: false })

    return {
        toggle,
        open,
        close,
        isOpened,
        state,
        setState,
    }
}
