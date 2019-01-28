const StandardError = require('standard-error')
const initialize = require('@innovation-ideas/db')
const { logError } = require('@innovation-ideas/utils')
const vars = require('../config/vars')

let models = null
async function startDB() {
  try {
    const { database } = vars()
    models = await initialize(database.credentials, database.options)
  } catch (error) {
    logError(new StandardError('DataBase not Found', { code: 404 }))
  }
}

if (module.parent) {
  startDB()
}

async function test(req, res) {
  try {
    const testCompany = await models.Company.create({
      name: 'probando',
    })

    console.log(testCompany.get())

    res.ok('Funka!')
  } catch (err) {
    logError(new StandardError(err.message, { code: err.code }))

    if (err.code) {
      switch (err.code) {
        case 400:
          res.badRequest(err.message)
          break
        case 403:
          res.forbidden(err.message)
          break
        case 404:
          res.notFound(err.message)
          break
        case 426:
          res.upgradeRequired(err.message)
          break
        default:
          res.serverError(err.message || err)
          break
      }
    } else {
      res.serverError(err.message || err)
    }
  }
}

module.exports = {
  test,
}
