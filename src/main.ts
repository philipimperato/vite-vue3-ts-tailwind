import { createApp, App as AppType } from 'vue'
import { router } from './routes'
import { pinia } from './store/store.pinia'
import App from './App.vue'
import './index.css'

const app = createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')