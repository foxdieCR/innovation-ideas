module.exports = function upgradeRequired(data) {
  // Set status code
  this.status(426)
  this.send({
    _status: 'ERR',
    _error: {
      message: data,
      code: 426,
    },
  })
}
