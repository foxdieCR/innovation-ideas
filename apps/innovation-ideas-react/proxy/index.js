const express = require('express')
const bodyParser = require('body-parser')
const { join } = require('path')

const environment = require('./config/vars')

const app = express()

const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV !== 'production') {
  /* eslint global-require: 0 */
  app.use(require('cors')({ origin: ['http://localhost:3000'] }))
}

app.use('/api', routes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'build')))
  app.use('*', (req, res) => {
    res.sendFile(join(__dirname, './build/index.html'))
  })
}

app.listen(environment.PORT, () => {
  console.log(
    'innovation-ideas listening on port',
    environment.PORT,
    process.env.NODE_ENV || 'develop'
  )
})
