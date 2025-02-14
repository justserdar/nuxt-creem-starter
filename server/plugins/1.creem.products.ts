import type { CreemProductList } from '#creem/shared/types'

export default defineNitroPlugin(async () => {
  const creemProducts: CreemProductList = await useCreemProducts().list()
  const hasItems = creemProducts.items.length > 0 ? true : false

  if (hasItems) {
    console.log('Creem Products Found from server plugin')
  } else {
    console.log('Errors loading Creem Products from server plugin')
  }
})
