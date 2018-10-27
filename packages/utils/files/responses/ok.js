module.exports = function sendOK(data) {
  // Set status code
  this.status(200)
  this.send(data || undefined)
}
