import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
        <Link to="infokurs">kurs</Link>
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
