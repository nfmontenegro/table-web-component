import React from 'react'
import {
  Button,
  Card,
  Container,
  Form,
  Message,
  Transition
} from 'semantic-ui-react'
import { Mutation } from 'react-apollo'

import { USERS_LIST_QUERY, ADD_USER_MUTATION } from '../queries/queries.graphql'

class AddUser extends React.Component {
  state = {
    user: {
      firstname: '',
      lastname: '',
      age: '',
      phone: ''
    },
    message: false,
    visible: false
  }

  update = (proxy, payload) => {
    //payload from graphQL
    const { addUser } = payload.data
    //const data = userList from query
    const data = proxy.readQuery({ query: USERS_LIST_QUERY })
    //filter differents users from deleted id
    data.listUsers = data.listUsers.concat(addUser)
    //rewrite userList
    proxy.writeQuery({ query: USERS_LIST_QUERY, data })
  }

  handleChange = e => {
    const { name, value } = e.target
    const targetName = name
    const user = this.state.user
    user[targetName] = value
    this.setState({ user })
  }

  render() {
    return (
      <Mutation
        mutation={ADD_USER_MUTATION}
        variables={this.state.user}
        update={this.update}>
        {(addUser, { loading, error }) => (
          <Container>
            {this.state.message && (
              <Message positive>
                <Message.Header>User register successfully! 😄</Message.Header>
                <p>
                  User: <b>{JSON.stringify(this.state.user)}</b>
                </p>
              </Message>
            )}
            <Form
              className="margin-center mt-40"
              onSubmit={async e => {
                e.preventDefault()
                const { data } = await addUser()
                this.setState({ message: true, visible: true })
                setTimeout(() => {
                  this.setState({
                    message: false,
                    visible: false,
                    user: { firstname: '', lastname: '', age: '', phone: '' }
                  })
                }, 3000)
              }}>
              <Form.Field>
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  name="firstname"
                  value={this.state.user.firstname}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  name="lastname"
                  value={this.state.user.lastname}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <input
                  placeholder="Age"
                  name="age"
                  value={this.state.user.age}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Phone</label>
                <input
                  placeholder="Phone"
                  name="phone"
                  value={this.state.user.phone}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button type="submit">Register</Button>
            </Form>
          </Container>
        )}
      </Mutation>
    )
  }
}

export default AddUser
