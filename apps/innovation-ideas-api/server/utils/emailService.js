const sgMail = require('@sendgrid/mail')
const Promise = require('bluebird')

module.exports = {
  sendMail(mailConfig, key) {
    return new Promise(resolve => {
      sgMail.setApiKey(key)
      const contentToSend = {
        to: mailConfig.to,
        from: mailConfig.from,
        subject: mailConfig.subject ? mailConfig.subject : 'Mensaje',
      }

      contentToSend.text = mailConfig.msn
      if (mailConfig.isHtml) {
        contentToSend.html = mailConfig.msn
        contentToSend.text = ' '
      }

      if (mailConfig.attachments) {
        contentToSend.attachments = [mailConfig.attachments]
      }

      sgMail.send(contentToSend, err => {
        if (err) {
          console.log(err.toString())
          resolve({
            status: 400,
            message: err,
          })
        } else {
          console.log('Se envio el correo')
          resolve({
            status: 200,
            message: 'Se envio el correo',
          })
        }
      })
    })
  },
}
