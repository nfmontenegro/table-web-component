import { authService } from '../../middleware/jwt'

export default {
  Query: {
    listUsers: async (parent, args, { pool, user }) => {
      const queryDb = 'SELECT * FROM users'
      const { rows, fields } = await pool.query(queryDb)
      // const payload = authService().signJWT({ rows })
      // const response = authService().verifyJWT(payload)
      return rows
    },
    listUser: async (parent, { id }, { pool }) => {
      const queryDb = `SELECT * FROM users WHERE id=${id}`
      const { rows } = await pool.query(queryDb)
      return rows[0]
    }
  },
  Mutation: {
    deleteUser: async (parent, { id }, { pool }) => {
      const queryDb = `DELETE FROM users WHERE id=${id}`
      const response = await pool.query(queryDb)
      return { id }
    }
  }
}
