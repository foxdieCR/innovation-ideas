const express = require('express')
const bodyParser = require('body-parser')
const config = require('./vars')
const { responseManagment } = require('@innovation-ideas/utils')

const routes = require('../routes')

const initRoutes = app => {
  app.use('/', routes)
}

const initMiddlewares = app => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use((req, res, next) => {
    res.append('X-Powered-By', 'SOINLabs <soinlabs@soin.co.cr>')
    next()
  })
}

const initViewsEngine = app => {
  app.set('view engine', 'ejs')
  app.set('views', './server/views')
  app.use(express.static('./server/public'))
}

const initResponses = app => {
  responseManagment.customResponses(app)
}

const init = () => {
  const app = express()
  initMiddlewares(app)
  initRoutes(app)
  initViewsEngine(app)
  initResponses(app)

  app
    .listen(config.port, () => {
      console.log(
        'App listening on port %s, in environment %s!',
        config.port,
        process.env.NODE_ENV || 's'
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

module.exports = {
  init,
}
