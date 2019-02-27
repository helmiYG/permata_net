import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/action/index'
import Footer from '../../components/footer/footer';
import ContentInfokurs from '../../components/content_infokurs/content_infokurs'

class InfoKurs extends Component {
  componentDidMount = () => {
    this.props.getDataInfo();
  }

  render() {
    return (
      <div>
        <ContentInfokurs data = {this.props.infokurs}/>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    infokurs: state.info.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataInfo: () => dispatch(actionTypes.getDataTable())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoKurs)
