/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#996aff',
                },
            },
            dropShadow: {
                glow: [
                    '0 0px 20px rgba(255,255, 255, 0.35)',
                    '0 0px 65px rgba(255, 255,255, 0.2)',
                ],
            },
        },
        container: {
            screens: {
                sm: '600px',
                md: '728px',
                lg: '984px',
                xl: '1240px',
            },
        },
    },
    plugins: [],
}
