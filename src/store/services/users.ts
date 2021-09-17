export function users({ feathers }) {
  const { apiClient, apiVuex } = feathers
  const { BaseModel, makeServicePlugin } = apiVuex

  class User extends BaseModel {
    static modelName = 'User' 
    
    static instanceDefaults() {
      return {
        email: '',
        password: '',
      }
    }
  }
  const servicePath = 'users'
  const vuexPlugin = makeServicePlugin({
    Model: User,
    service: apiClient.service(servicePath),
    servicePath,
  })

  // Setup the client-side Feathers hooks.
  apiClient.service(servicePath).hooks({})

  return vuexPlugin
}