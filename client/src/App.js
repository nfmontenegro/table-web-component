import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Home from './components/Home'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

export const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Home />
    </Router>
  </ApolloProvider>
)
