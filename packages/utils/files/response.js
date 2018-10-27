function customResponses(app) {
  const expressApp = app
  // response files name
  const responses = [
    'badRequest',
    'forbidden',
    'notFound',
    'ok',
    'serverError',
    'unauthorized',
    'upgradeRequired',
  ]

  responses.forEach(response => {
    // Add responses to the express
    expressApp.response[response] = require(`./responses/${response}`)
  })
}

module.exports = {
  customResponses,
}
