import { createStore } from 'vuex'
import { users } from './services/users'

export function setupStore({ feathers }: { feathers: { apiClient: any, apiVuex: any } }) {
  const store = createStore({
    state() {
      return {}
    },
    mutations: {},
    actions: {},
    getters: {},
    modules: {},
    plugins: [
      users({ feathers }),
      feathers.apiVuex.makeAuthPlugin({ userService: 'users' })
    ],
  })
  return store
}