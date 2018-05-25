import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

import { Company } from './Company'
import ListUsers from './ListUsers'
import AddUser from './AddUser'

class Home extends React.Component {
  state = { activeItem: 'home' }

  render() {
    return (
      <div>
        <Menu size="large">
          <Menu.Item
            name="home"
            active={this.state.activeItem === 'home'}
            onClick={() => {
              this.setState({ activeItem: this.state.active })
              this.props.history.push('/')
            }}
          />
          <Menu.Item
            name="list users"
            active={this.state.activeItem === 'messages'}
            onClick={() => {
              this.setState({ activeItem: this.state.active })
              this.props.history.push('/users')
            }}
          />
          <Menu.Item
            name="add user"
            active={this.state.activeItem === 'add user'}
            onClick={() => {
              this.setState({ activeItem: this.state.active })
              this.props.history.push('/addUser')
            }}
          />
        </Menu>
        <Switch>
          <Route exact path="/" component={Company} />
          <Route path="/users" component={ListUsers} />
          <Route path="/addUser" component={AddUser} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Home)
