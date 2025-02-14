import type { CreemCustomerPortalBody } from '#creem/shared/types'

export default defineEventHandler(async (event) => {
  const { customerId } = getQuery(event)
  if (!customerId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Customer ID is required'
    })
  }
  const redirect: CreemCustomerPortalBody = await useCreemCustomer().portal({
    customer_id: customerId
  })
  if (!redirect.customer_portal_link) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed to create billing portal session'
    })
  }
  return redirect.customer_portal_link
})
