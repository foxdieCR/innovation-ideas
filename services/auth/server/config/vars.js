const { join } = require('path')
const dotenv = require('dotenv-safe')

const environment = process.env.NODE_ENV || 'development'

dotenv.load({
  path: join(__dirname, `./env/.env.${environment}`),
  sample: join(__dirname, `./env/.env.example`),
})

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 5050,
  database: {
    credentials: {
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    options: {
      host: process.env.DB_HOST,
      setup: process.env.DB_SETUP || false,
      dialectOptions: {
        ssl: process.env.DB_SSL || true,
      },
    },
  },
}
