import { Pool } from 'pg'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

export const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.POSTGRESPORT
})
