import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'local-react', // 远程模块名称
      filename: 'remoteEntry.js', // 远程模块入口文件，与本地模块中`remotes`配置相对应
      remotes: {
        home: 'http://localhost:3003/assets/remoteEntry.js'
      },
      shared: ['react'] // 用于在远程模块与本地模块之间共享第三方依赖
    })
  ],
  build: {
    target: 'esnext', // 针对非行内样式，需要构建规格为 es2020，否则样式会失效，控制台给出提示
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  }
})
