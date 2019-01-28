const chalk = require('chalk')

function logError(errorInstance) {
  const { message, code, originalStack } = errorInstance
  const { error } = console

  error('')
  error(chalk.red('⚑ ERROR ⚑'))
  error(`🐞  ${chalk.red(code)} ${message}`)
  error(`🚧  ${chalk.yellow('Stack:')}`)
  error(chalk.blue(originalStack))
  error('')
}

module.exports = logError
