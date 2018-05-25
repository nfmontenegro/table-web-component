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
      return { id, msg: `User with id ${id} deleted` }
    },
    addUser: async (parent, user, { pool }) => {
      const { firstname, lastname, age, phone } = user
      const queryDb = `INSERT INTO users (lastname, firstname, age, phone) VALUES ($1, $2, $3, $4)`
      const response = await pool.query(queryDb, [
        firstname,
        lastname,
        age,
        phone
      ])
      return user
    }
  }
}
