import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import './formLogin.css'

class formLogin extends Component {

  state = {
    newEmail: '',
    newPassword: ''
  }

  // Event when value change
  inputEmail = (event) => {
    let newEmail = event.target.value.toString()
    console.log(newEmail,'Email');
    this.setState({
      newEmail: newEmail
    })
  }

  inputPassword = (event) => {
    let newPassword = event.target.value.toString()
    console.log(newPassword,'Pass');
    this.setState({
      newPassword: newPassword
    })
  }

  render() {
    const { t } = this.props;
    return (
      <div className="FormLogin">
        <h4>{t('Home.Form_Login')}</h4>
        <Form>
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input 
              type="email" 
              name="email" 
              id="exampleEmail" 
              placeholder="enter email" 
              onChange={(event) => this.inputEmail(event)}/>
            </FormGroup>
            <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input 
              type="password" 
              name="password" 
              id="examplePassword" 
              placeholder="enter password"
              onChange={(event) => this.inputPassword(event)} />
            </FormGroup>
            <Button color="success" block>Submit</Button>
      </Form>

      </div>
    )
  }
}

export default withTranslation('common')(formLogin);
