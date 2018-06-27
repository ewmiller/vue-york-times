'use strict'

require('dotenv').config()

module.exports = {
  NODE_ENV: '"production"',
  BASE_ENDPOINT: JSON.stringify(process.env.BASE_ENDPOINT)
}
