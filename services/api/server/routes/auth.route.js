const express = require('express')

const authController = require('../controllers/Auth_Controller')

const router = express.Router()

router.route('/').get(authController.test)

module.exports = router
