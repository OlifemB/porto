import { atom } from 'recoil'

export const appGlobalState = atom({
    key: 'appGlobalState',
    default: {
        windowSize: 0,
        isMobile: true,
        loading: null,
    },
})
export const mobileMenuState = atom({
    key: 'mobileMenuState',
    default: false,
})
