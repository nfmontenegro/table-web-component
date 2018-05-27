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
    const user = this.state.user
    user[name] = value
    this.setState({ user })
  }

  updateUser = async (e, editUser) => {
    e.preventDefault()
    const response = await editUser({
      variables: {
        id: this.props.match.params.id,
        ...this.state.user
      }
    })
    console.log(response)
  }

  render() {
    console.log(this.state.user)
    return (
      <Query
        query={GET_USER_QUERY}
        variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <Loading />
          if (error) return <Error />
          return (
            <Mutation
              mutation={EDIT_USER_MUTATION}
              refetchQueries={[{ query: USERS_LIST_QUERY }]}>
              {(editUser, { loading, error }) => (
                <Container style={{ marginTop: '60px' }}>
                  <Card style={{ width: '40%', margin: '0 auto' }}>
                    <Card.Content>
                      <Form
                        onSubmit={async e => {
                          this.updateUser(e, editUser)
                        }}>
                        <Form.Field>
                          <label>First Name</label>
                          <input
                            name="firstname"
                            defaultValue={data.user.firstname}
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label>Last Name</label>
                          <input
                            name="lastname"
                            defaultValue={data.user.lastname}
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label>Age</label>
                          <input
                            name="age"
                            defaultValue={data.user.age}
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Form.Field>
                          <label>Phone</label>
                          <input
                            name="phone"
                            defaultValue={data.user.phone}
                            onChange={this.handleChange}
                          />
                        </Form.Field>
                        <Button type="submit">Edit User</Button>
                      </Form>
                    </Card.Content>
                  </Card>
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
