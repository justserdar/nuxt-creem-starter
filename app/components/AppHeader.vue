<script setup lang="ts">
// const nuxtApp = useNuxtApp()
// const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'Home',
  to: '/',
  icon: 'i-heroicons-cube-transparent'
}, {
  label: 'Shop',
  to: '/shop',
  icon: 'i-heroicons-shopping-cart'
}])

// nuxtApp.hooks.hookOnce('page:finish', () => {
//   updateHeadings([
//     document.querySelector('#features'),
//     document.querySelector('#pricing'),
//     document.querySelector('#testimonials'),
//     document.querySelector('#faq')
//   ])
// })
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt Creem Starter<UBadge
        label="Landing"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <template #right>
      <UButton
        label="Grab the Nuxt Creem Starter on GitHub"
        color="white"
        to="https://github.com/justserdar/nuxt-creem-starter"
        external
        variant="ghost"
        trailing-icon="i-simple-icons-github"
        class="hidden lg:flex"
      />
      <UColorModeToggle />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton
        label="Grab the Nuxt Creem Starter on GitHub"
        color="white"
        to="https://github.com/justserdar/nuxt-creem-starter"
        external
        variant="ghost"
        trailing-icon="i-simple-icons-github"
      />
      <UColorModeToggle />
    </template>
  </UHeader>
</template>
