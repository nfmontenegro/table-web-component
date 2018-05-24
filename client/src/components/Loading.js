import React from 'react'
import { Container, Icon } from 'semantic-ui-react'

export const Loading = () => (
  <Container className="mt-20 center aligned">
    <h2>
      <Icon name="circle notched" loading />We are fetching that content for
      you.
    </h2>
  </Container>
)
