import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as action from '../store/action/index'

class Login extends Component {
  componentDidMount() {
      let page = this.props.match.path
      this.props.changeTitle(page)
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
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
