const express = require('express')

const controller = require('../controllers/test')

const router = express.Router()

router.route('/').get(controller.test)

router.route('/email').get(controller.testEmail)

router.route('/emailTemplate').get(controller.testEmailTemplate)

module.exports = router
