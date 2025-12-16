import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'
import tailwindcss from "@tailwindcss/vite";
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0', // 这个用于启动
        port: 8080, // 指定启动端口
        open: true //启动后是否自动打开浏览器
    },


    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    plugins: [
        tailwindcss(),
        vue(),
        vuetify({autoImport: true}),
    ],
})
