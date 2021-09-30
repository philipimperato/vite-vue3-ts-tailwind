<template lang="pug">
<button type="button" @click="() => save_user()">Save</button>
</template>

<script lang="ts" setup>
import { handleClones } from 'feathers-pinia'
import { User } from './../store/users'
debugger;
const user = new User({ email: 'philipimperato@gmail.com' })
const { clones, saveHandlers } = handleClones({ user })
console.log(clones.users)
const { save_user } = saveHandlers
</script>

<route lang="yaml">
meta:
  layout: empty
</route>