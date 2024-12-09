export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'authorization')
  
  try {
    const response = await fetch('http://127.0.0.1:5123/api/apps', {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Accept': '*/*',
        'Connection': 'keep-alive'
      }
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch apps error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch apps'
    })
  }
})
