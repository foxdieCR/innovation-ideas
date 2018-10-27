const Sequelize = require('sequelize')
const sequelizeTransforms = require('sequelize-transforms')
const isObject = require('lodash/isObject')
const modules = require('./models/index')

const { Op } = Sequelize
const defaultConfig = {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: Op, // use Sequelize.Op
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
  setup: false,
}

module.exports = async (credentials, config) => {
  const mergeConfig = Object.assign({}, defaultConfig, config)
  try {
    let isUrl = true
    if (isObject(credentials)) {
      isUrl = false
      // TODO: Agregar otras validaciones, como que no sea null o vacio

      if (!credentials.hasOwnProperty('database')) {
        console.error('Error no se indico el database')
      }
      if (!credentials.hasOwnProperty('username')) {
        console.error('Error no se indico el username')
      }
      if (!credentials.hasOwnProperty('password')) {
        console.error('Error no se indico el password')
      }
      if (!config.hasOwnProperty('host')) {
        console.error('Error no se indico el host de la base de datos')
      }
    }

    let sequelize
    const db = {}

    if (!sequelize) {
      if (isUrl) {
        sequelize = new Sequelize(credentials, mergeConfig)
      } else {
        sequelize = new Sequelize(
          credentials.database,
          credentials.username,
          credentials.password,
          mergeConfig
        )
      }
      sequelizeTransforms(sequelize)
    }

    // Initialize models
    modules.forEach(module => {
      const model = module(sequelize, Sequelize, config, db)
      db[model.name] = model
    })

    Object.keys(db).forEach(model => {
      if (db[model].associate) {
        db[model].associate(db)
      }
    })

    db.sequelize = sequelize
    db.Sequelize = Sequelize

    await sequelize.authenticate()

    if (mergeConfig.setup === true || mergeConfig.setup === 'true') {
      await sequelize.sync()
    }

    return db
  } catch (error) {
    console.log(error)
    return error
  }
}
