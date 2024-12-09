export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  try {
    const response = await fetch('http://127.0.0.1:5123/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Login error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to login'
    })
  }
})
