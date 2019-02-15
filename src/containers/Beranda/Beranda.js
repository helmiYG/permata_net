import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import * as action from '../../store/action/index'
import Footer from '../../components/footer/footer';
import BannerBeranda from '../../assets/images/Banner-beranda.jpg'
import './Beranda.css';

class Beranda extends Component {
  
  // toggleSidebar() {
  //   document.getElementById("sidebar").classList.toggle('active');
  // }
  
  componentDidMount(){
    let page = this.props.location.pathname
    this.props.changeTitle(page)
    console.log(this.props.location.pathname)
    localStorage.setItem('page', page)
  }

  render() {
    return (
      <div>
        <img src={BannerBeranda}/>
       <div class="sidebar">
         <div class="toggle-btn" 
        onClick={this.toggleSidebar}
        >
        <span></span>
        <span></span>
        <span></span>
        </div>
        <ul>
          <li><Link to='#'>Beranda</Link></li>
          <li><Link to='#'>Rekening Saya</Link></li>
          <li><Link to='#'>Transfer</Link></li>
          <li><Footer/></li>
        </ul>
       </div>
      </div>
     )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTitle: (page) => dispatch(action.changeTitle(page))
  }
}

export default connect(null, mapDispatchToProps)(Beranda)