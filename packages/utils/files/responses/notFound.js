module.exports = function notFound(data) {
  // Set status code
  this.status(404)
  this.send({
    _status: 'ERR',
    _error: {
      message: data,
      code: 404,
    },
  })
}
