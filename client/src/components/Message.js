import React from 'react'
import { Message } from 'semantic-ui-react'

export const MessageComp = ({ message, type }) => (
  <Message>
    <Message.Header>User State!</Message.Header>
    <p>
      User: <b>{JSON.stringify(message)}</b>
    </p>
  </Message>
)
