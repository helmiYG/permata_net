import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Beranda.css';

export default class Beranda extends Component {
  
  // toggleSidebar() {
  //   document.getElementById("sidebar").classList.toggle('active');
  // }
  
  render() {
    return (
      <div class="sidebar">
        {/* <div class="toggle-btn" 
        onClick={this.toggleSidebar}
        >
        <span></span>
        <span></span>
        <span></span>
        </div> */}
        <ul>
          <li><Link to='#'>Beranda</Link></li>
          <li><Link to='#'>Rekening Saya</Link></li>
          <li><Link to='#'>Transfer</Link></li>
        </ul>
       </div>
    )
  }
}
