import React from 'react'
import { Button, Card, Confirm, Container, Grid, Form } from 'semantic-ui-react'
import { Query, Mutation } from 'react-apollo'
import {
  GET_USER_QUERY,
  EDIT_USER_MUTATION,
  USERS_LIST_QUERY
} from '../queries/queries.graphql'
import { Loading } from './Loading'
import { Error } from './Error'
import { MessageComp } from './Message'

class EditUser extends React.Component {
  state = {
    user: {
      firstname: '',
      lastname: '',
      age: '',
      phone: ''
    },
    message: false
  }

  handleChange = e => {
    const { name, value } = e.target
    const { user } = this.state
    user[name] = value
    this.setState({ user })
  }

  updateUser = async (e, editUser) => {
    e.preventDefault()
    const timeout = 3000
    const response = await editUser({
      variables: {
        id: this.props.match.params.id,
        ...this.state.user
      }
    })
    this.setState({ message: true })
    setTimeout(() => {
      this.setState({ message: false })
    }, timeout)
  }

  render() {
    const id = parseInt(this.props.match.params.id)
    return (
      <Query query={GET_USER_QUERY} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <Error />
          return (
            <Mutation
              mutation={EDIT_USER_MUTATION}
              refetchQueries={[{ query: GET_USER_QUERY, variables: { id } }]}>
              {(editUser, { loading, error }) => (
                <Container style={{ marginTop: '60px' }}>
                  {this.state.message && (
                    <MessageComp message={this.state.user} />
                  )}
                  <Card style={{ width: '40%', margin: '0 auto' }}>
                    <Card.Content>
                      <Form
                        onSubmit={async e => {
                          this.updateUser(e, editUser)
                        }}>
                        <Form.Field>
                          <label>First Name</label>
                          <input
                            placeholder={data.user.firstname}
                            name="firstname"
                            value={this.state.user.username}
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label>Last Name</label>
                          <input
                            placeholder={data.user.lastname}
                            name="lastname"
                            value={this.state.user.lastname}
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label>Age</label>
                          <input
                            placeholder={data.user.age}
                            name="age"
                            value={this.state.user.age}
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label>Phone</label>
                          <input
                            placeholder={data.user.phone}
                            name="phone"
                            value={this.state.user.phone}
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Button type="submit">Edit User</Button>
                      </Form>
                    </Card.Content>
                  </Card>
                  <MessageComp message={data.user} />
                </Container>
              )}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}

export default EditUser
