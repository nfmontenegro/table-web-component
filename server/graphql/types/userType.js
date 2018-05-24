export default `
  "User Schema"

  type User {
    id: Int!
    firstname: String
    lastname: String
    age: Int
    phone: String
  }

  type Query {
    "Get all the users"
    listUsers: [User],
    "Get a user"
    listUser(id: Int!): User
  }
  
  type Mutation {
    "Delete user"
    deleteUser(id: Int!): deletedUser
  }

  type deletedUser {
    id: Int!
  }
`
