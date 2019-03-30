const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { customResponse } = require('@innovation-ideas/utils')
const config = require('./vars')
const routes = require('../routes')

const initRoutes = app => {
  app.use('/', routes)

  // default when the route does not exist
  app.all('*', (req, res) => {
    res.status(404).send("you're lost?")
  })
}

const initMiddlewares = app => {
  app.use(bodyParser.json({ limit: '50mb', extended: true }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

  app.use(cors({ origin: ['http://localhost:3000'] }))

  app.use((req, res, next) => {
    res.removeHeader('X-Powered-By')
    res.append('X-Powered-By', 'SOINLabs <soinlabs@soin.co.cr>')
    next()
  })
  customResponse(app)
}

process.on('SIGINT', () => {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)')
  // some other closing procedures go here
  process.exit(1)
})

module.exports.init = async () => {
  const app = express()
  initMiddlewares(app)
  initRoutes(app)

  app
    .listen(config.port, () => {
      console.log(
        'App listening on port %s, in environment %s!',
        config.port,
        process.env.NODE_ENV || 'develop',
      )
      console.log('**********************')
      console.log('innovation-ideas online')
      console.log('**********************')
    })
    .on('error', err => {
      console.error(err)
    })
  return app
}
