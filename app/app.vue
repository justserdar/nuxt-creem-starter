<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  script: [
    {
      'src': useRuntimeConfig().public.UMAMI_DOMAIN,
      'defer': true,
      'data-website-id': useRuntimeConfig().public.UMAMI_ID
    }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogImage: 'https://github.com/justserdar/nuxt-creem-starter/blob/main/public/nuxt-creemio-banner.png',
  twitterImage: 'https://github.com/justserdar/nuxt-creem-starter/blob/main/public/nuxt-creemio-banner.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <AppHeader />

  <UMain>
    <NuxtPage />
  </UMain>

  <AppFooter />

  <UNotifications />
</template>
