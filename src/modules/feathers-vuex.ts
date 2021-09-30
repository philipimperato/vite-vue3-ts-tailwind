import { FeathersVuex } from '@feathersjs/vuex'
import { Module } from './../types'

export const install: Module = ({ app }) => {
  app.use(FeathersVuex)
}