const fs = require('fs')
const hbs = require('handlebars')
const path = require('path')

module.exports.compile = async (templateName, data) => {
  const filePath = path.join(__dirname, '/templates', `${templateName}.hbs`)
  const html = await fs.readFileSync(filePath, 'utf-8')

  return hbs.compile(html)(data)
}
