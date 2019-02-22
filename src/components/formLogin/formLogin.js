import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { withTranslation } from 'react-i18next';

import * as action from '../../store/action/index';
import Spinner from '../ui/PreLoader/Preloader';
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

  handlerClicked = (event) => {
    console.log("Di click");
    event.preventDefault();
    this.props.login(
      this.state.newEmail,
      this.state.newPassword)
  }

  render() {
    const { t } = this.props;

console.log(this.props.idToken,'Token');
console.log(this.props.loading,'Loading');
let loadingSpinner = ''; 
if(this.props.loading){
  loadingSpinner= <Spinner/>
}
  console.log(loadingSpinner,'Spinner');

    let errorMessage = '';
    if(this.props.err){
      errorMessage = <Alert color="danger">
                        {this.props.err}
                     </Alert>
                      }

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
            <Button 
              color="success" block
              onClick={(event) => this.handlerClicked(event)}>Submit</Button>
              <FormGroup>
              {errorMessage}
              </FormGroup>
      </Form>
      {loadingSpinner}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return{
      login: (email, password) => dispatch(action.auth(email,password))
    }
}

const mapStateToProps = state => {
  return{
    idToken: state.auth.idToken,
    loading: state.auth.loading,
    err: state.auth.err
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withTranslation('common')(formLogin));