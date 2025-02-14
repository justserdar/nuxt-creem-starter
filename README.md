![Nuxt Creem](https://github.com/justserdar/nuxt-creem-starter/blob/main/public/nuxt-creemio-banner.png)

# Nuxt Creem Landing Store

This starter lets you get started with [Nuxt Creem](https://github.com/justserdar/nuxt-creem) quickly.

- [Live demo](https://creem.justserdar.dev/)
- [Documentation](https://nuxt-creem.justserdar.dev/)

[![Deploy to NuxtHub](https://hub.nuxt.com/button.svg)](https://hub.nuxt.com/new?repo=nuxt-ui-pro/landing)

## Quick Start

```bash [Terminal]
npx nuxi init -t github:justserdar/nuxt-creem-starter
```

## Setup

Include your Creem.IO API key in the `.env` file:

```bash
NUXT_CREEM_VERSION=v1            #optional, default is v1
NUXT_CREEM_ENVIRONMENT=test      #optional, default is test
NUXT_CREEM_TEST_TOKEN=           #required, default is test
NUXT_CREEM_LIVE_TOKEN=           #optional, !required if NUXT_CREEM_ENVIRONMENT is live
NUXT_CREEM_WEBHOOK_SECRET=       #optional, !required if enabled in Creem.IO
NUXT_CREEM_RETURN_URL=           #optional, default is not used and follows Creem.IO Product return url
```

Import the Nuxt Creem module and include the required env variables in your `nuxt.config.ts` like so:

```ts
// nuxt.config.ts

export default defineNuxtConfig({
  modules: [
    'nuxt-creem'
  ],
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
      site_url: process.env.NUXT_PUBLIC_SITE_URL
    }
  },
  ...
})
```

### Install dependencies

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
