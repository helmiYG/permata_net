import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './formLogin.css'
export default class formLogin extends Component {
  render() {
    return (
      <div className="FormLogin">
        <h4>Selamat Datang di PermataNet</h4>
        <Form>
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="enter email" />
            </FormGroup>
            <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="enter password" />
            </FormGroup>
            <Button color="success" block>Submit</Button>
      </Form>

      </div>
    )
  }
}
