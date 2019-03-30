module.exports = function sendOK(message, data, pages) {
  // Set status code
  this.status(200)
  this.send({
    statusCode: 200,
    status: 'success',
    data: data || {},
    message,
    errors: null,
    pages: pages || {},
  })
}
