const badRequest = require('./badRequest')
const forbidden = require('./forbidden')
const notFound = require('./notFound')
const ok = require('./ok')
const serverError = require('./serverError')

module.exports = {
  badRequest,
  forbidden,
  notFound,
  ok,
  serverError,
}
