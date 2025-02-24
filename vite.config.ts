import {defineConfig, ConfigEnv, UserConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({command}: ConfigEnv): UserConfig => {
    const commonConfig = {
        plugins: [
            react(),
            tailwindcss(),
        ],
        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                },
            },
        },
    };

    if (command === 'serve') {
        return {
            ...commonConfig,
            server: {
                port: 5173,
                proxy: {
                    '/api': {
                        target: 'http://localhost:8000',
                        changeOrigin: true,
                        secure: false,
                        rewrite: (path: string) => path.replace(/^\/api/, '/api')
                    }
                }
            },
        } as UserConfig;
    }

    return {
        ...commonConfig,
        base: '/',
        build: {
            ...commonConfig.build,
            outDir: 'dist',
            sourcemap: false,
        }
    } as UserConfig;
});
