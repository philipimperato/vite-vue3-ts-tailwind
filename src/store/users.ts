import { defineStore, BaseModel } from './store.pinia'
import { api } from '../feathers'

export class User extends BaseModel {}

const servicePath = 'users'
export const useUsers = defineStore({ servicePath, Model: User })

api.service(servicePath).hooks({})