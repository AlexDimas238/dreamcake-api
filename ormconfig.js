const { Migration } = require('typeorm')

require('dotenv').config()

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  entities: ['src/**/*.entities.ts'],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    entitiesDir: 'src/**',
    migrationsDir: 'src/migration'
  }
}
