const express = require('express')
const test = require('./test.route')

const router = express.Router()

router.use('/test', test)

module.exports = router
