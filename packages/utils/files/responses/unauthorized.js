module.exports = function unauthorized(data) {
  // Set status code
  this.status(401)
  this.send({
    _status: 'ERR',
    _error: {
      message: data,
      code: 401,
    },
  })
}
