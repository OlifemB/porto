import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [react(), svgr(), ViteImageOptimizer()],
})
