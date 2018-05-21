import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Card, Icon, Image, Container } from 'semantic-ui-react'

export const ListUsers = () => (
  <Query
    query={gql`
      {
        listUsers {
          id
          firstname
          lastname
          age
          phone
        }
      }
    `}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ...</p>
      if (error) return <p>Something is wrong! 😕</p>

      return data.listUsers.map(({ firstname, lastname }) => (
        <Container>
          <Card>
            <Card.Content>
              <Card.Header>{firstname}</Card.Header>
              <Card.Description>{lastname}</Card.Description>
            </Card.Content>
          </Card>
        </Container>
      ))
    }}
  </Query>
)
