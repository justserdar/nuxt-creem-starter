// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-creem',
    'nuxt-umami'
  ],

  devtools: {
    enabled: true
  },

  runtimeConfig: {
    creem: {
      environment: process.env.NUXT_CREEM_ENVIRONMENT,
      version: process.env.NUXT_CREEM_VERSION,
      return_url: process.env.NUXT_CREEM_RETURN_URL,
      webhook_secret: process.env.NUXT_CREEM_WEBHOOK_SECRET,
      tokens: {
        test: process.env.NUXT_CREEM_TEST_TOKEN,
        live: process.env.NUXT_CREEM_LIVE_TOKEN
      }
    },
    public: {
      site_url: process.env.NUXT_PUBLIC_SITE_URL,
      umami_id: process.env.NUXT_UMAMI_ID,
      umami_domain: process.env.NUXT_UMAMI_DOMAIN
    }
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  vite: {
    server: {
      allowedHosts: ['dev.darweb.io']
    }
  },

  typescript: {
    strict: false
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  umami: {
    enabled: process.env.NODE_ENV === 'production',
    autoTrack: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_UMAMI_ID,
    host: process.env.NUXT_UMAMI_HOST,
    logErrors: true
    // proxy: 'cloak',
    // useDirective: true,
    // excludeQueryParams: false,
    // domains: ['cool-site.app', 'my-space.site'],
    // customEndpoint: '/my-custom-endpoint',
  }
})
