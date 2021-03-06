import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client'
import { iff, discard } from 'feathers-hooks-common'
import feathersVuex from '@feathersjs/vuex'
import axios from 'axios';

export function setupFeathers({ storage = window.localStorage }: { storage?: any }) {
  const apiUrl = import.meta.env.VITE_APP1_API_URL as string
  const restClient = rest(apiUrl)

  const apiClient = feathers()
    .configure(restClient.axios(axios))
    .configure(
      auth({ storage }),
    )
    .hooks({
      before: {
        all: [
          // Don't send FeathersVuex temp attributes to the server.
          iff(
            context => ['create', 'update', 'patch'].includes(context.method),
            discard('__id', '__isTemp'),
          ),
        ],
      },
    })

  // Setting up feathers-vuex
  const apiVuex = feathersVuex(apiClient, {
    serverAlias: 'api', // optional for working with multiple APIs (this is the default value)
    idField: '_id', // Must match the id field in your database table/collection
    whitelist: ['$regex', '$options'],
  })

  return {
    apiClient,
    apiVuex,
  }
}