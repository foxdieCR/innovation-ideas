module.exports = function badRequest(message, errors) {
  // Set status code
  this.status(400)
  this.send({
    statusCode: 400,
    status: 'error',
    data: null,
    message,
    errors,
  })
}
