<template>
  <ULandingHero
    title="Shop"
    description="Shop for products"
  >
    <template #default>
      <section class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
            Product list
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <NuxtLink
              v-for="product in products.items"
              :key="product.id"
              class="mx-auto sm:mr-0 p-2 group cursor-pointer lg:mx-auto bg-white border-2 border-transparent hover:border-primary transition-all duration-500 rounded-xl"
              :to="`/shop/products/${product.id}/`"
            >
              <div class="">
                <NuxtImg
                  :src="product.image_url"
                  as="webp"
                  :alt="product.name"
                  class="w-full aspect-square rounded-2xl object-cover"
                />
              </div>
              <div class="mt-5">
                <div class="flex items-center justify-between">
                  <h6
                    class="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600"
                  >
                    {{ product.name }}
                  </h6>
                  <h6 class="font-semibold text-md leading-8 text-indigo-600">
                    {{ `$${product.price / 100}` }}
                  </h6>
                </div>
                <p class="mt-2 font-normal text-sm leading-6 text-gray-500">
                  {{ product.description }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>
  </ULandingHero>
</template>

<script lang="ts" setup>
import type { CreemProductList } from '#creem/shared/types'

definePageMeta({
  layout: 'shop'
})

const { data: products } = await useFetch<CreemProductList>('/api/v1/products/list')
</script>
