import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/2d-planner/',
    server: {
        host: true,
        port: 3000,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/vars.scss";`,
            },
        },
    },
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
});
