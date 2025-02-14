import type { CreemProduct } from '#creem/shared/types'

export default defineEventHandler(async (event) => {
  const { productId } = getQuery(event)
  const product: CreemProduct = await useCreemProducts().get(productId)
  return product
})
