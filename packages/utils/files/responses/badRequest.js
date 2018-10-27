module.exports = function badRequest(data) {
  // Set status code
  this.status(400)
  this.send({
    _status: 'ERR',
    _error: {
      message: data,
      code: 400,
    },
  })
}
