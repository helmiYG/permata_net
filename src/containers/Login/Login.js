import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Login.css'
import Carousel from '../../components/ui/carousel/loginCarousel'
import Button from '../../components/button/Button'
import * as action from '../../store/action/index'

class Login extends Component {
  componentDidMount() {
      let page = this.props.match.path
      this.props.changeTitle(page)
  }
  render() {
    return (
      <div className="login">
        <Carousel />
        <div className="warning">
          <h6>HATI-HATI, TELITI & KONFIRMASI</h6>
          <p>Jaga Kerahasiaan User ID, Password, PIN/TIN, Alamat e-mail & Token Anda <br />
             Jangan beritahukan kepada pihak lain termasuk staf Permata <br />
             Jika ada HAL YANG TIDAK WAJAR/ BIASA. HENTIKAN transaksi dan KONFIRMASI ke PermataTel di 1500111 <br />
             Pastikan akses PermataNet hanya di <a href="https://new.permatanet.com">https://new.permatanet.com </a> <br />< br/>
             <span>Klik <a href="#index">di sini</a> untuk info lengkap Tips Keamanan Bertransaksi</span></p>
        </div>
        <div className="row adsense">
          <div className="col-md-2">
            <img src="https://new.permatanet.com/permatanet/retail/css/rev/images/mobile.jpg" alt="hp" /> </div>
          <div className="col-md-6 text-adsense">
            <h4>PermataMobile dengan <br /> teknologi SmartCX </h4>
            <p>Download dan gunakan PermataMobile sekarang juga untuk <span id="hashtag">#CaraPintar bertransaksi</span></p>
              <Button>IOS</Button>
              <Button>ANDROID</Button>
          </div>
          <div className="col-md-4 menu-adsense">
            <div><a className="text-menu" href="#index">Tentang PermataNet</a></div><hr />
            <div><a className="text-menu" href="#index">Syarat dan Ketentuan</a></div><hr />
            <div><a className="text-menu" href="#index">Buka Rekening</a></div><hr />
            <div><a className="text-menu" href="#index">Website Permata</a></div><hr />
          </div>
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

export default connect(null, mapDispatchToProps)(Login)
