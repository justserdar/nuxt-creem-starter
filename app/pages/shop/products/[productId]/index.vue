<template>
  <div>
    <ULandingHero>
      <UPageHero
        v-if="product && status === 'success'"
        :title="product.name"
        :description="product.description"
        align="center"
      >
        <NuxtImg
          :src="product.image_url"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        />
      </UPageHero>
      <UPageHero
        v-else-if="status === 'pending'"
        title="Loading..."
        description="Loading..."
        align="left"
      >
        <ImagePlaceholder
          width="640"
          height="360"
        />
      </UPageHero>
      <UPageBody>
        <ULandingGrid>
          <UPricingCard
            class="col-span-6"
            :title="product.name"
            :description="product.description"
            :price="`$${product.price/100}`"
            discount=""
            cycle="/month"
            :highlight="false"
            :badge="{ label: 'Most popular' }"
            :button="{ label: 'Buy now', click: () => buyProduct(product) }"
            orientation="vertical"
            align="bottom"
            :features="['One developer', 'Unlimited projects', 'Unlimited minor & patch updates', 'Lifetime access']"
          />
          <div class="col-span-6">
            <UPageCard
              v-if="product.mode === 'test'"
              title="Test Mode Active"
              description="This is not a real purchase. You are not being charged."
            >
              <template #default>
                <code class="mt-2 block">
                  You can use '4242 4242 4242 4242' <br> as the credit card number for a test purchase.
                </code>
              </template>
              <template #footer>
                Payments powered by
                <NuxtLink
                  class="text-primary"
                  to="https://creem.com"
                >
                  Creem.io
                </NuxtLink>
              </template>
            </UPageCard>
            <UPageCard
              v-else
              title="Buy Now"
              description="This is a real purchase. You will be charged."
            >
              <template #footer>
                Payments powered by
                <NuxtLink
                  class="text-primary"
                  to="https://creem.com"
                >
                  Creem.io
                </NuxtLink>
              </template>
            </UPageCard>
          </div>
        </ULandingGrid>
      </UPageBody>
      <ULandingFAQ
        :items="items"
        multiple
      />
    </ULandingHero>
    <ULandingSection
      :title="testimonials.title"
      :description="testimonials.description"
    >
      <UPageColumns>
        <!-- Hack for Safari -->
        <div
          v-for="(testimonial, index) in testimonials.items"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial v-bind="testimonial" />
        </div>
      </UPageColumns>
    </ULandingSection>
    <ULandingSection>
      <ULandingCTA
        title="Have questions?"
        description="We're here to help. Contact us at serdar@justserdar.dev."
      />
    </ULandingSection>
  </div>
</template>

<script lang="ts" setup>
import type { CreemProduct } from '#creem/shared/types'

definePageMeta({
  layout: 'shop'
})

const { productId } = useRoute().params
const { data: product, status } = await useFetch<CreemProduct>(`/api/v1/products`, {
  headers: {
    'Content-Type': 'application/json'
  },
  query: {
    productId
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

const items = [{
  label: 'Do you have a free trial?',
  content: 'Ea est ex aliqua exercitation quis et cillum adipisicing sit tempor veniam incididunt labore.'
}, {
  label: 'Can I use Nuxt UI Pro for Open Source projects?',
  content: 'Et adipisicing do do do sunt irure proident consequat fugiat tempor occaecat commodo fugiat in proident.'
}, {
  label: 'What does "Unlimited minor & patch updates" include?',
  content: 'Dolor dolor consectetur tempor consectetur sint ut id ex quis voluptate dolore incididunt qui mollit.'
}, {
  label: 'Do you offer technical support?',
  content: 'Sint id sint incididunt culpa.'
}]

const testimonials = {
  title: 'What people are saying',
  description: 'Hear from our customers about their experience.',
  items: [
    {
      quote: 'Nostrud tempor sunt fugiat.',
      author: {
        name: 'Rose Roberson',
        description: 'CEO at Company',
        avatar: {
          src: 'https://i.pravatar.cc/120?img=1'
        }
      }
    },
    {
      quote: 'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
      author: {
        name: 'Chace Rodgers',
        description: 'CEO at Company',
        avatar: {
          src: 'https://i.pravatar.cc/120?img=7'
        }
      }
    },
    {
      quote: 'Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.',
      author: {
        name: 'Cornelius Sheppard',
        description: 'CEO at Company',
        avatar: {
          src: 'https://i.pravatar.cc/120?img=3'
        }
      }
    }
  ]
}
</script>
