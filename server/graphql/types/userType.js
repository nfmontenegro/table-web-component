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
    user(id: Int!): User
  }
  
  type Mutation {
    "Delete user"
    deleteUser(id: Int!): deletedUser
    "Add user"
    addUser(firstname: String!, lastname: String!, age: Int!, phone: String!): addUser
     "Edit user"
    editUser(id: Int!, firstname: String!, lastname: String!, age: Int!, phone: String!): User
  }

  type deletedUser {
    id: Int!
  }

  type addUser {
    firstname: String
    lastname: String
    age: Int
    phone: String
  }
`
