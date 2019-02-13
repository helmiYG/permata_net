import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Login.css'
// import Carousel from '../../components/ui/carousel/loginCarousel'
import * as action from '../../store/action/index'
import FormLogin from '../../components/formLogin/formLogin'
import ContentLogin from '../../components/content_login/content_login'

class Login extends Component {
  componentDidMount() {
      let page = this.props.match.path
      this.props.changeTitle(page)
  }
  
  render() {
    return (
      <div className="login">
        {/* <Carousel /> */}
        <FormLogin />
        <ContentLogin />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTitle: (page) => dispatch(action.changeTitle(page))
    }
}

export default connect(null, mapDispatchToProps)(Login)

