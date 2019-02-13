import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import './formLogin.css'

class formLogin extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="FormLogin">
        <h4>{t('Home.Form_Login')}</h4>
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

export default withTranslation('common')(formLogin);
