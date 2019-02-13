import React, { Component } from 'react'

import './footer.css'
import NortonImage from '../../asset/images/norton.png';

export default class footer extends Component {
  render() {
    return (
        <div>
        <div id="moreInfo">
          <p>Untuk informasi lebih lanjut hubungi PermataTel 1500111</p>
        </div>
        <div className='footer'>
            <div className='row'>
                <div className='col-md-6'>
                    <div>© 2016-2021 PermataBank. All rights reserved</div>
                    <div> Limit | Transaksi  | Info Kurs | Syarat & Ketentuan | Hubungi Kami</div>
                </div>
                <div className='col-md-6 imagePosition'>
                    <img src={NortonImage} className="nortonImage" alt="background" />
                </div>
            </div>
        </div>
        </div>
    )
  }
}
