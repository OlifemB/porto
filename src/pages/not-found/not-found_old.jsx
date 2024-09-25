// import React from 'react'
// import { useSpring, animated } from 'react-spring'
// import pill from '../../common/vectors/pack1/pill.svg?react'
// import title from '../../common/vectors/SITE IN PROGRESS.svg?react'
// import titleM from '../../common/vectors/SITE IN PROGRESS-mobile.svg?react'
// import { getRandom } from '../../common/utils/number.jsx'
// import { Navbar } from '../../components/navbar/navbar'
//
// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
//
// const transTitle = (x, y) => `translate3d(${x / 4}px,${y / 4}px,0)`
//
// export const NotFound = () => {
//     const [spring, setSpring] = useSpring(() => ({
//         xy: [0, 0],
//         config: { mass: 10, tension: 550, friction: 140 },
//     }))
//
//     const handleMouseMove = ({ clientX: x, clientY: y }) =>
//         setSpring({ xy: calc(x, y) })
//
//     const wq =
//         window.innerWidth > window.innerHeight
//             ? window.innerWidth / 2
//             : window.innerHeight / 2
//
//     return (
//         <>
//             <Navbar />
//             <div
//                 className={
//                     'flex w-full h-full items-center justify-center overflow-x-hidden relative'
//                 }
//                 onMouseMove={handleMouseMove}
//             >
//                 {Array(100)
//                     .fill(null)
//                     .map((item, index) => {
//                         const q = getRandom(5, 9)
//                         const o1 = Math.floor(
//                             getRandom(100, wq * (index % 2 === 0 ? -1 : 1)),
//                         )
//                         const o2 = Math.floor(
//                             getRandom(100, wq * (index % 2 === 0 ? -1 : 1)),
//                         )
//                         const scale = getRandom(0.1, 0.6)
//
//                         return (
//                             <animated.div
//                                 key={'particle' + index}
//                                 className={
//                                     'w-4 h-4 opacity-50 text-white opacity-40'
//                                 }
//                                 style={{
//                                     transform: spring.xy.interpolate(
//                                         (x, y) =>
//                                             `translate3d(${x / q + o1}px,${y / q - o2}px,0)`,
//                                     ),
//                                     scale: scale,
//                                 }}
//                             >
//                                 {pill()}
//                             </animated.div>
//                         )
//                     })}
//
//                 <animated.div
//                     id="progress"
//                     className={
//                         'text-6xl uppercase absolute text-white font-bold drop-shadow-lg drop-shadow-md'
//                     }
//                     style={{ transform: spring.xy.interpolate(transTitle) }}
//                 >
//                     <div className={'hidden md:block'}>{title()}</div>
//                     <div className={'block md:hidden'}>{titleM()}</div>
//                 </animated.div>
//             </div>
//         </>
//     )
// }
