const dev = {
  APP_PATH: 'http://localhost:4000/api',
}

const prod = {
  APP_PATH: '/api/apps',
}

const config = process.env.NODE_ENV === 'production' ? prod : dev

export default { ...config }
