import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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

      return data.listUsers.map(({ firstname, lastname }) => {
        return <p>{firstname}</p>
      })
    }}
  </Query>
)
