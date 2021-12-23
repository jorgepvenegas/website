const fetch = require('node-fetch')
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const id = Math.floor(Math.random() * 83)

    const API = `https://swapi.dev/api/people/${id}`

    const response = await fetch(API)
    const data = await response.json()

    console.log('Sending response')
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
