export default defineCreemWebhookResponseHandler(async (event) => {
  const body = await readBody(event)
  console.log('Webhook received for: ', body.id)
  return {
    status: 200,
    message: 'Webhook received'
  }
})
