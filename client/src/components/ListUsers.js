import React from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  USERS_LIST_QUERY,
  DELETE_USER_MUTATION
} from '../queries/queries.graphql'
import { Button, Card, Container, Grid } from 'semantic-ui-react'
import './index.css'

class ListUsers extends React.Component {
  state = {
    images: []
  }

  componentDidMount() {
    return fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => data.results.map(users => users.picture.large))
      .then(images => this.setState({ images }))
  }

  update = (proxy, payload) => {
    const { deleteUser } = payload.data
    const data = proxy.readQuery({ query: USERS_LIST_QUERY })
    data.listUsers = data.listUsers.filter(user => user.id !== deleteUser.id)
    proxy.writeQuery({ query: USERS_LIST_QUERY, data })
  }

  handleDelete = deleteUser => {
    if (confirm('Are you sure you want to delete this item?')) {
      deleteUser()
    }
  }

  render() {
    return (
      <Query query={USERS_LIST_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading ...</p>
          if (error) return <p>Something is wrong! 😕</p>
          return (
            <Container className="mt-20">
              <Grid columns={4}>
                <Grid.Row>
                  {data.listUsers.length !== 0 ? (
                    data.listUsers.map((user, index) => (
                      <Grid.Column key={user.id}>
                        <Card
                          image={this.state.images[index]}
                          header={user.firstname}
                          meta={user.lastname}
                          description={user.phone}
                          description={user.id}
                          extra={
                            <div>
                              <Button style={{ float: 'left' }}>Editar</Button>
                              <Mutation
                                mutation={DELETE_USER_MUTATION}
                                variables={{ id: user.id }}
                                update={this.update}>
                                {(deleteUser, { error }) => (
                                  <Button
                                    color="red"
                                    style={{ float: 'right' }}
                                    onClick={() =>
                                      this.handleDelete(deleteUser)
                                    }>
                                    Eliminar
                                  </Button>
                                )}
                              </Mutation>
                            </div>
                          }
                        />
                      </Grid.Column>
                    ))
                  ) : (
                    <div>No hay usuarios</div>
                  )}
                </Grid.Row>
              </Grid>
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default ListUsers
