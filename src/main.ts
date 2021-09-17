import { createApp, App as AppType } from 'vue'
import { setupFeathers } from './feathers-client'
import { setupStore } from './store/store'
import { router } from './routes'
import App from './App.vue'
import './index.css'

const app = createApp(App)
const feathers = setupFeathers({ storage: window.localStorage })

app.use(router)
app.use(setupStore({ feathers }))

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map(i =>
  i.install?.({ app, isClient: true, router }),
)

app.mount('#app')