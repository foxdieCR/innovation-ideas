const initialize = require('@innovation-ideas/db')
const { database } = require('../config/vars')

let db = null

async function startDB() {
  if (!db) {
    db = await initialize(database.credentials, database.options)
  }
}

async function test(req, res) {
  try {
    // init db
    await startDB()

    const testCompany = await db.Company.create({
      name: 'probando',
    })

    console.log(testCompany.get())

    res.ok('Funka!')
  } catch (err) {
    // TODO: add log elk
    console.log(err)

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
