module.exports = function CustomErr(code, sms) {
  this.code = code
  this.message = sms
}
