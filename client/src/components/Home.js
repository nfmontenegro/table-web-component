import React from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

import { Company } from './Company'
import ListUsers from './ListUsers'

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
            name="messages"
            active={this.state.activeItem === 'messages'}
            onClick={() => {
              this.setState({ activeItem: this.state.active })
              this.props.history.push('/users')
            }}
          />
        </Menu>
        <Route exact path="/" component={Company} />
        <Route path="/users" component={ListUsers} />
      </div>
    )
  }
}

export default withRouter(Home)
