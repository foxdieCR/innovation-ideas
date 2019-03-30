module.exports = function notFound(message, errors) {
  // Set status code
  this.status(404)
  this.send({
    statusCode: 404,
    status: 'error',
    data: null,
    message,
    errors,
  })
}
