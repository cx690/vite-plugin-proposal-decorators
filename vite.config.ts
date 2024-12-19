import { defineConfig } from 'vite';
import decorator from './src';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        decorator({
            options: {
                version: '2023-11'
            }
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
})
