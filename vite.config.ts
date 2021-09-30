import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages";
import Layouts from 'vite-plugin-vue-layouts';
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue'
      ]
    }),
    vue(), 
    Pages({
      pagesDir: [
        { dir: "src/pages", baseRoute: "" }
      ],
    }), 
    Layouts()
  ]
})
