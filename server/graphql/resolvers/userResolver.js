import { authService } from '../../middleware/jwt'

export default {
  Query: {
    listUsers: async (__, args, { pool, user }) => {
      const queryDb = 'SELECT * FROM "users"'
      const { rows, fields } = await pool.query(queryDb)
      const payload = authService().signJWT({ rows })
      const response = authService().verifyJWT(payload)
      return rows
    },
    listUser: async (__, { id }, { pool }) => {
      const queryDb = `SELECT * FROM USERS WHERE id=${id}`
      const { rows } = await pool.query(queryDb)
      return rows
    }
  }
}
