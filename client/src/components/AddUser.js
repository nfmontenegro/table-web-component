import React from 'react'
import { Button, Card, Container, Form } from 'semantic-ui-react'

class AddUser extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    age: '',
    phone: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  //TODO: parsear edad al momento de llamar la mutación
  render() {
    return (
      <Container>
        <Form className="margin-center mt-40">
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              name="firstname"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              name="lastname"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder="Age" name="age" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input
              placeholder="Phone"
              name="phone"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Register</Button>
        </Form>
      </Container>
    )
  }
}

export default AddUser
