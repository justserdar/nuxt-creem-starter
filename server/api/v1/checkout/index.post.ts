import type { CreemProduct, CreemCheckoutBody } from '#creem/shared/types'

export default defineEventHandler(async (event) => {
  const { product }: { product: CreemProduct } = await readBody(event)
  if (!product) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A Creem Product ID is required'
    })
  }
  const session: CreemCheckoutBody = await useCreemCheckout().createSession({ product_id: product.id })
  if (!session.checkout_url) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed to create checkout session'
    })
  }
  return session.checkout_url
})
