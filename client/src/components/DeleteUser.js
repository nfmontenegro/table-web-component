import React from 'react'
import {
  Button,
  Card,
  Confirm,
  Container,
  Grid,
  Message
} from 'semantic-ui-react'
import { Query, Mutation } from 'react-apollo'
import {
  USERS_LIST_QUERY,
  DELETE_USER_MUTATION
} from '../queries/queries.graphql'

class DeleteUser extends React.Component {
  state = {
    open: false,
    message: false
  }

  openMessage = () => {
    this.setState({ open: true })
  }

  closeMessage = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <React.Fragment>
        <Mutation
          mutation={DELETE_USER_MUTATION}
          variables={{ id: this.props.id }}
          refetchQueries={[{ query: USERS_LIST_QUERY }]}>
          {(deleteUser, { error }) => (
            <React.Fragment>
              <Button
                color="red"
                style={{ float: 'right', width: '45%' }}
                onClick={this.openMessage}>
                {error ? <Error /> : 'Delete'}
              </Button>
              <Confirm
                open={this.state.open}
                onCancel={this.closeMessage}
                onConfirm={async () => {
                  await deleteUser()
                  this.setState({ open: false })
                }}
              />
            </React.Fragment>
          )}
        </Mutation>
      </React.Fragment>
    )
  }
}

export default DeleteUser
