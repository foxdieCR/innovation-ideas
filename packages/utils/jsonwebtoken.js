const jwt = require('jsonwebtoken')

async function sign(payload, options, secret) {
  return new Promise(resolve => {
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        return resolve({
          status: 500,
          err,
        })
      }

      return resolve(token)
    })
  })
}

async function verify(token, options, secret) {
  return new Promise(resolve => {
    jwt.verify(token, secret, options, (err, decoded) => {
      if (err) {
        return resolve({
          status: 500,
          err,
        })
      }

      return resolve(decoded)
    })
  })
}

module.exports = {
  sign,
  verify,
}
