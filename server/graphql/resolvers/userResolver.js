export default {
  Query: {
    listUsers: async (__, args, { pool }) => {
      const queryDb = 'SELECT * FROM "users"'
      const { rows, fields } = await pool.query(queryDb)
      return rows
    },
    listUser: async (__, { id }, { pool }) => {
      const queryDb = `SELECT * FROM USERS WHERE id=${id}`
      const { rows } = await pool.query(queryDb)
      return rows
    }
  }
}
