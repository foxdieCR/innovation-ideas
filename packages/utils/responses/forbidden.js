module.exports = function forbidden(message, errors) {
  // Set status code
  this.status(403)
  this.send({
    statusCode: 403,
    status: 'error',
    data: null,
    message,
    errors,
  })
}
