const classTitle =
    'text-4xl sm:text-6xl lg:text-8xl font-bold leading-none block radwaveFont text-shadow-lg'
const classSubtitle =
    'text-2xl sm:text-4xl  lg:text-5xl  mt-2 Glowdex text-shadow-lg'
const classText =
    'text-xl lg:text-3xl radwaveFont mt-6 font-semibold text-shadow-sm mt-12 '

export const data = [
    {
        offset: 0,
        speed: 0.5,
        content: [
            {
                type: 'text',
                text: 'Hello, world!',
                className: classTitle,
            },
            {
                type: 'text',
                text: 'Dat is my little portfolio!',
                className: classSubtitle,
            },
            // {
            //     type: 'text',
            //     text: 'Loooook dat i can do and dats not all',
            //     className: classText,
            // },
        ],
    },
]
