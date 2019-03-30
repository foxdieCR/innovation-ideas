const initialize = require('@innovation-ideas/db')
const { database, sendgrid } = require('../config/vars')

const emailService = require('../utils/emailService')
const template = require('../utils/templateService')

let db = null
async function initDB() {
  if (!db) {
    db = await initialize(database.credentials, database.options)
  }
}

if (module.parent) {
  initDB()
}

async function test(req, res) {
  try {
    const testCompany = await db.Company.create({
      name: 'probando',
    })

    console.log(testCompany.get())

    res.ok('Funka!')
  } catch (err) {
    // TODO save errors
    console.error(err)
    // rollback in case of error
    switch (err.code) {
      case 400:
        res.badRequest(err.message, {
          code: 'E_BADREQUEST',
          message: err.message,
        })
        break
      case 404:
        res.notFound(err.message, {
          code: 'E_NOTFOUND',
          message: err.message,
        })
        break
      default:
        res.serverError(err.message, {
          code: 'E_SERVER',
          message: err.message,
        })
        break
    }
  }
}

async function testEmail(req, res) {
  try {
    const mailConfig = {
      to: 'lalfaro@soin.co.cr',
      from: `Emmanuel <emmalfca@gmail.com>`,
      subject: 'Test',
      isHtml: false,
      msn: 'Probando',
    }
    const sendEmail = await emailService.sendMail(mailConfig, sendgrid.key)

    console.log(sendEmail)

    res.ok('Funka!')
  } catch (err) {
    // TODO save errors
    console.error(err)
    switch (err.code) {
      case 400:
        res.badRequest(err.message, {
          code: 'E_BADREQUEST',
          message: err.message,
        })
        break
      case 404:
        res.notFound(err.message, {
          code: 'E_NOTFOUND',
          message: err.message,
        })
        break
      default:
        res.serverError(err.message, {
          code: 'E_SERVER',
          message: err.message,
        })
        break
    }
  }
}

async function testEmailTemplate(req, res) {
  try {
    const header = await template.compile('/header', {})

    const footer = await template.compile('/footer', {})

    const mainSection = await template.compile('/test', {
      year: 'test1',
      name: 'test2',
      idType: 'test3',
      id: 'test4',
      event: 'test5',
      date: 'test6',
      checkin: 'test7',
      checkout: 'test8',
    })

    const emailTemplate = await template.compile('/layout', {
      header,
      mainSection,
      footer,
    })

    const mailConfig = {
      to: 'lalfaro@soin.co.cr',
      from: `Emmanuel <emmalfca@gmail.com>`,
      subject: 'Test',
      isHtml: true,
      msn: emailTemplate,
    }
    const sendEmail = await emailService.sendMail(mailConfig, sendgrid.key)

    console.log(sendEmail)

    res.ok('Funka!')
  } catch (err) {
    // TODO save errors
    console.error(err)
    switch (err.code) {
      case 400:
        res.badRequest(err.message, {
          code: 'E_BADREQUEST',
          message: err.message,
        })
        break
      case 404:
        res.notFound(err.message, {
          code: 'E_NOTFOUND',
          message: err.message,
        })
        break
      default:
        res.serverError(err.message, {
          code: 'E_SERVER',
          message: err.message,
        })
        break
    }
  }
}

module.exports = {
  test,
  testEmail,
  testEmailTemplate,
}
