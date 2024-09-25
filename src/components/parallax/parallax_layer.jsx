import React from 'react'
import { ParallaxItem } from './parallax_item'

export const ParallaxCustomLayer = ({ layer, index, style }) => {
    return (
        <ParallaxLayer offset={layer.offset} speed={layer.speed}>
            <div
                className={
                    'container h-screen flex flex-col items-center justify-center relative'
                }
            >
                <div
                    className={'flex flex-col w-[90%]  left-0 absolute gap-4'}
                    style={style}
                >
                    {layer.content.map((item, itemIndex) => {
                        return (
                            <ParallaxItem
                                item={item}
                                index={itemIndex}
                                key={
                                    'ParallaxCustomLayer' +
                                    index +
                                    'ParallaxItem' +
                                    itemIndex
                                }
                                // style={transition}
                            />
                        )
                    })}
                </div>
            </div>
        </ParallaxLayer>
    )
}
