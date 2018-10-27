module.exports = function serverError(data) {
  // Set status code
  this.status(500)
  this.send({
    _status: 'ERR',
    _error: {
      message: data,
      code: 500,
    },
  })
}
