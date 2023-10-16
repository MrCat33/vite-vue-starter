import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    VueMacros({
      plugins: {
        vue: vue(),
      },
    }),
    Unocss(),
    AutoImport({
      dirs: ['./src/utils/**'],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
      ],
    }),
    Components({
      resolvers: [
        VueUseComponentsResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
