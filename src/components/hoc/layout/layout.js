import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux'

class Layout extends Component {

  render() {
    let title = ''
    if (this.props.header) {
        title = this.props.header.title
    }
    let helmet = (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )

    return (
      <Fragment>
         {helmet}
         {this.props.children}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
    return {
        header: state.head
    }
}

export default connect(mapStateToProps)(Layout)
