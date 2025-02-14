<script setup lang="ts">
import type { CreemProduct, CreemProductList } from '~/types/creem'

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

const { data: products, status } = await useFetch<CreemProductList>('/api/v1/products/list', {
  headers: {
    'content-type': 'application/json'
  }
})

const buyProduct = async (product: CreemProduct) => {
  const checkoutSessionUrl = await $fetch('/api/v1/checkout', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: {
      product
    }
  })
  await navigateTo(checkoutSessionUrl, { external: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
    >
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span
              class="absolute inset-0"
              aria-hidden="true"
            />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>

      <ULandingGrid
        class="p-10"
      >
        <UPricingCard
          v-if="status === 'pending'"
          title="Loading..."
          description="Loading products..."
          :price="0"
          :currency="'$'"
          :cycle="''"
          :highlight="false"
        />
        <template v-else>
          <UPricingCard
            v-for="(product, index) in products.items"
            :key="product.id"
            :title="product.name"
            :description="product.description"
            :price="`$${product.price / 100}`"
            :highlight="index === 0"
            :badge="{ label: 'Test Product' }"
            orientation="vertical"
            :features="['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access']"
            class="col-span-6 row-span-2"
            align="bottom"
          >
            <template #header>
              <div class="flex gap-2">
                <NuxtImg
                  :src="product.image_url"
                  as="webp"
                  class="rounded-md"
                />
              </div>
            </template>
            <template #bottom>
              <div class="flex gap-2">
                <UButton
                  class="animate-pulse"
                  color="primary"
                  rounded="md"
                  @click="buyProduct(product)"
                >
                  Purchase
                </UButton>
                <UButton
                  color="primary"
                  variant="outline"
                  rounded="md"
                  :to="`/shop/products/${product.id}/`"
                >
                  View Product Page
                </UButton>
              </div>
            </template>
          </UPricingCard>
        </template>
      </ULandingGrid>
    </ULandingHero>
  </div>
</template>
