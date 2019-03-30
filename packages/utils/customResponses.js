const fs = require('fs')

const responses = require('./responses/index')

module.exports = express => {
  const app = express

  // get responses
  const userResponses = fs.readdirSync(`${__dirname}/responses`)

  // Add responses to the express response object
  userResponses.forEach(reponseFileName => {
    const responseName = reponseFileName.split('.')[0]
    app.response[responseName] = responses[responseName]
  })
}
