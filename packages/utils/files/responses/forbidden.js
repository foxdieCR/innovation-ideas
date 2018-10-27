module.exports = function forbidden(data) {
  // Set status code
  this.status(403)
  this.send({
    _status: 'ERR',
    _error: {
      message: data,
      code: 403,
    },
  })
}
