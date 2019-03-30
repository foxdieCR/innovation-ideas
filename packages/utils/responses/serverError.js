module.exports = function serverError(message, errors) {
  // Set status code
  this.status(500)
  this.send({
    statusCode: 500,
    status: 'error',
    data: null,
    message,
    errors,
  })
}
