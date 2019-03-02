const { join } = require('path')
const dotenv = require('dotenv-safe')

const environment = process.env.NODE_ENV || 'development'

dotenv.load({
  path: join(__dirname, `../env/.env.${environment}`),
  sample: join(__dirname, '../env/.env.example'),
})

module.exports = {
  PROJECT_API_PATH: process.env.PROJECT_API_PATH,
  APP_API_PATH: process.env.APP_API_PATH,
  API_PATH: process.env.API_PATH,
  PROXY_PATH: process.env.PROXY_PATH,
  REACT_PATH: process.env.REACT_PATH,
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV,
}
