import React, { Component } from "react";
import Button from '../button/Button'
import { withTranslation } from 'react-i18next';

import './content_login.css'

class Content_Login extends Component {

  render() {
    const { t } = this.props;
    
    return (
      <div className="content-login">
        <div className="warning">
          <h6>{t('Home.Hati_Hati')}</h6>
          <p>
            {t('Home.Jaga_Kerahasiaan')}<br />
            {t('Home.Jangan_Beritahukan')}<br />
            {t('Home.Jika_Ada')} <br />
            {t('Home.Pastikan')}{" "}
            <a href="https://new.permatanet.com">
              https://new.permatanet.com{" "}
            </a>{" "}
            <br />
            <br />
            <span>
            {t('Home.Klik')} <a href="#index">{t('Home.Di_Sini')}</a> {t('Home.Untuk_Info')}
            </span>
          </p>
        </div>
        <div className="row adsense">
          <div className="col-lg-8 col-md-12 col-sm-12 text-adsense">
            <img
              id="mobileImage"
              src="https://new.permatanet.com/permatanet/retail/css/rev/images/mobile.jpg"
              alt="hp"
            />
            <div id="techno_smart">
              <h4>
              {t('Home.PermataMobile')} <br /> {t('Home.Teknologi_SmartCX')}{" "}
              </h4>
              {/* <p>aaaaa</p> */}
              <p style={{fontSize:'smaller'}}>
              {t('Home.Download')}{" "} <br />
                <span id="hashtag">{t('Home.Cara')}</span>
              </p>
              <Button>IOS</Button>
              <Button>ANDROID</Button>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 menu-adsense">
            <div>
              <a className="text-menu" href="#index">
                {t('Home.Tentang_PermataNet')}
              </a>
            </div>
            <hr />
            <div>
              <a className="text-menu" href="#index">
              {t('Home.Syarat_Ketentuan')}
              </a>
            </div>
            <hr />
            <div>
              <a className="text-menu" href="#index">
              {t('Home.Buka_Rekening')}
              </a>
            </div>
            <hr />
            <div>
              <a className="text-menu" href="#index">
              {t('Home.Website_PermataBank')}
              </a>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('common')(Content_Login);
