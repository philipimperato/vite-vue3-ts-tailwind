<template lang="pug">
.relative.overflow-hidden
  div(class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true")
    svg(class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" 
        width="364" height="384" viewBox="0 0 364 384" fill="none")
      defs
        pattern#eab71dd9-9d7a-47bd-8044-256344ee00d0(x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse")
          rect(x="0" y="0" width="4" height="4" fill="currentColor")
      rect(width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)")
  div(class="relative pt-6 pb-6 bg-gray-800")
    Popover
      nav(class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global")
        .flex.items-center.flex-1
          div(class="flex items-center justify-between w-full md:w-auto")
            a(href="#")
              span.sr-only Workflow
              img(class="h-10 w-auto sm:h-12 text-white" src="/src/assets/bible_logo.svg" alt)
            div(class="-mr-2 flex items-center md:hidden")
              PopoverButton(class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white")
                span.sr-only Open main menu
                MenuIcon.h-6.w-6(aria-hidden="true")
          //- div(class="hidden space-x-10 md:flex md:ml-10")
          //-   a(class="font-medium text-white hover:text-gray-300" v-for="item in navigation" :key="item.name" :href="item.href")
          //-     | {{ item.name }}
        div(class="hidden md:flex")
          a(class="btn-inline px-4 py-2 text-sm btn-gray" href="#" @click="$router.push('/Users/login')")
            | Log in
      transition(
        enter-active-class="duration-150 ease-out" 
        enter-from-class="opacity-0 scale-95" 
        enter-to-class="opacity-100 scale-100" 
        leave-active-class="duration-100 ease-in" 
        leave-from-class="opacity-100 scale-100" 
        leave-to-class="opacity-0 scale-95"
      )
        PopoverPanel(class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" focus)
          .rounded-lg.shadow-md.bg-white.ring-1.ring-black.ring-opacity-5.overflow-hidden
            .px-5.pt-4.flex.items-center.justify-between
              div
                img.h-8.w-auto(src="/src/assets/bible_logo.svg" alt)
              .-mr-2
                PopoverButton(class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500")
                  span.sr-only Close menu
                  XIcon.h-6.w-6(aria-hidden="true")
            //- .px-2.pt-2.pb-3.space-y-1
            //-   a(class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" 
            //-     v-for="item in navigation" :key="item.name" :href="item.href")
            //-     | {{ item.name }}
            a(
              class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" 
              @click="$router.push('/Users/login')"
            )
              | Log in
    main(class="mt-16 sm:mt-24")
      .mx-auto.max-w-7xl
        div(class="lg:grid lg:grid-cols-12 lg:gap-8")
          div(class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center")
            div
              h1(class="text-4xl tracking-tight font-extrabold text-white sm:leading-none lg:text-5xl xl:text-6xl")
                span(class="md:block")
                  | Bibleti.me
                | {{ ' ' }}
                span(class="text-indigo-400 md:block")
                  | notes and posts with verse-first bible studies.
          div(class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6")
            div(class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden")
              div(class="px-4 py-8 sm:px-10")
                div
                  p.text-base.text-center.font-medium.text-gray-700 Sign up for an account
                .mt-6
                  form.space-y-6(action="#" method="POST")
                    div
                      label.sr-only(for="name")
                        | Email
                      input#name(class="block w-full form-input sm:text-sm" 
                        type="text" name="name" autocomplete="name" placeholder="Full name" required)
                    div
                      label.sr-only(for="password")
                        | Password
                      input#password(class="block w-full form-input sm:text-sm" 
                        type="password" name="password" placeholder="Password" required)
                    div
                      label.sr-only(for="confirm-password")
                        | Confirm confirm-password
                      input#confirm-password(class="block w-full form-input sm:text-sm " 
                        name="confirm-password" type="password" placeholder="Confirm Password" required)
                    div
                      button(class="btn btn-indigo w-full mb-4 py-2 px-4 text-sm " type="submit")
                        | Create your account
    div.bg-white.text-sm.text-center.text-gray-500.py-8
      | Bibleti.me 
</template>

<script lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { handleClones } from 'feathers-pinia'
import { defineProps } from "vue";
import { useUsers } from './../store/users'


export default defineComponent({
  setup() {
    const user = useUsers()
    console.log(user.value)
    const { clones, saveHandlers } = handleClones({ user })
    const { save_users } = saveHandlers

    console.log(clones, save_users)

    return {};
  },
});
</script>

<style lang="postcss" scoped>
</style>

<route lang="yaml">
meta:
  layout: empty
</route>