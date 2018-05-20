export default `
type User {
    firstname: String
    lastname: String
    age: Int
    phone: String
  }
  type Query {
    "Obtener todos las películas"
    listUsers: [User],
    listUser(id: Int): [User]
  }
`
