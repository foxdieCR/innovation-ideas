const express = require('express')
const bodyParser = require('body-parser')
const { join } = require('path')

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

app.listen(4001, () => {
  console.log(
    'App listening on port 4001!',
    4001,
    process.env.NODE_ENV || 'develop'
  )
  console.log('**********************')
  console.log('innovation-ideas online')
  console.log('**********************')
})
