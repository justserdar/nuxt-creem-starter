import type { CreemProductList } from '#creem/shared/types'

export default defineEventHandler(async () => {
  const products: CreemProductList = await useCreemProducts().list()
  return products
})
