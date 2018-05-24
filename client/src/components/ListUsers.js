import React from 'react'
import { Query } from 'react-apollo'
import { USERS_LIST } from '../queries/queries.graphql'
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

  handleDelete = e => {
    e.preventDefault()
    console.log('delete!')
  }

  render() {
    return (
      <Query query={USERS_LIST}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading ...</p>
          if (error) return <p>Something is wrong! 😕</p>
          return (
            <Container className="mt-20">
              <Grid columns={4}>
                <Grid.Row>
                  {data.listUsers.map((user, index) => (
                    <Grid.Column key={user.id}>
                      <Card
                        image={this.state.images[index]}
                        header={user.firstname}
                        meta={user.lastname}
                        description={user.phone}
                        extra={
                          <div>
                            <Button style={{ float: 'left' }}>Editar</Button>
                            <Button
                              color="red"
                              style={{ float: 'right' }}
                              onClick={this.handleDelete}>
                              Eliminar
                            </Button>
                          </div>
                        }
                      />
                    </Grid.Column>
                  ))}
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
