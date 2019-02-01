const { Router } = require('express')

const router = Router()

router.use('/', (req, res) => res.json({ hello: 'Hola mundo' }))

module.exports = router
