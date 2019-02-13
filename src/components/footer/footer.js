import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import './footer.css'
import NortonImage from '../../assets/images/norton.png';

class footer extends Component {
  render() {
    const { t } = this.props;
    return (
        <div>
        <div id="moreInfo">
          <p>Untuk informasi lebih lanjut hubungi PermataTel 1500111</p>
        </div>
        <div className='footer'>
            <div className='row'>
                <div className='col-md-6'>
                    <div>{t('Footer.Footer_1')}</div>
                    <div>{t('Footer.Footer_2')}</div>
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

export default (withTranslation)('common')(footer);
