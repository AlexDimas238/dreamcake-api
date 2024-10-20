const { DataSource } = require('typeorm')
require('dotenv').config() // Carrega variáveis do .env

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migration/**/*.ts']
})

module.exports = { AppDataSource }
