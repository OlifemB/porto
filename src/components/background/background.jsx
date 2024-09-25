import React from 'react'
import { data } from './data.js'
import { useRecoilValue } from 'recoil'
import { appGlobalState } from '../../store/index.js'

export const Background = ({ spring }) => {
    const appState = useRecoilValue(appGlobalState)

    return (
        <div
            className={
                'absolute w-screen h-screen overflow-hidden flex item-center justify-center'
            }
        >
            {appState.isMobile ? (
                <div className={'bg bg_mobile'} />
            ) : (
                data.map((item, index) => (
                    <div
                        key={'BackgroundLayer' + index}
                        style={{
                            duration: 1000,
                            transform: spring.xy.to(
                                (x, y) =>
                                    `translate3d(${x / item.q}px,${y / item.q}px,0)`,
                            ),
                        }}
                        className={item.className}
                    />
                ))
            )}
        </div>
    )
}
