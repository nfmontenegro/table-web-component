import React from 'react'
import { ListUsers } from './components/ListUsers'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

export const App = () => (
  <ApolloProvider client={client}>
    <ListUsers />
  </ApolloProvider>
)
