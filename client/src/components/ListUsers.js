import React from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  USERS_LIST_QUERY,
  DELETE_USER_MUTATION
} from '../queries/queries.graphql'
import { Button, Card, Container, Grid } from 'semantic-ui-react'
import { Loading } from './Loading'
import { Error } from './Error'
import './index.css'

class ListUsers extends React.Component {
  update = (proxy, payload) => {
    //payload from graphQL
    const { deleteUser } = payload.data

    //const data = userList from query
    const data = proxy.readQuery({ query: USERS_LIST_QUERY })

    //filter differents users from deleted id
    data.listUsers = data.listUsers.filter(user => user.id !== deleteUser.id)

    //rewrite userList
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
          if (loading) return <Loading />
          if (error) return <Error />
          return (
            <Container className="mt-20 mb-20">
              <Grid columns={4}>
                <Grid.Row>
                  {data.listUsers.length !== 0 ? (
                    data.listUsers.map((user, index) => (
                      <Grid.Column key={user.id}>
                        <Card
                          image={
                            'http://elporvenir.mx/imagenes/editorialistasPerfil/default.png'
                          }
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
                                refetchQueries={[{ query: USERS_LIST_QUERY }]}>
                                {(deleteUser, { loading, error }) => (
                                  <div>
                                    <Button
                                      color="red"
                                      style={{ float: 'right' }}
                                      onClick={() =>
                                        this.handleDelete(deleteUser)
                                      }>
                                      Eliminar
                                    </Button>
                                    {loading && <Loading />}
                                    {error && <Error />}
                                  </div>
                                )}
                              </Mutation>
                            </div>
                          }
                        />
                      </Grid.Column>
                    ))
                  ) : (
                    <h2 className="center aligned">No hay usuarios</h2>
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
