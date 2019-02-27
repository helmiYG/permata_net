import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import Image from '../../components/images/images';
import BannerInfokurs from '../../assets/images/banner-info-kurs.jpg'
import '../../components/content_infokurs/content_infokurs.css'

 class content_infokurs extends Component {
  render() {
      console.log('data', this.props.data);
      let rowTable = "";
    if (this.props.data === null) {
      rowTable = "loading"
    } else {
      rowTable = this.props.data.map(row => {
        return (
          <tr>
            <td>{row.Kurs}</td>
            <td>{row.Bank_Notes.Beli}</td>
            <td>{row.Bank_Notes.Jual}</td>
            <td>{row.TT.Beli}</td>
            <td>{row.TT.Jual}</td>
          </tr>
        )
        //console.log( "hasil", row);
      });
    }
    const { t } = this.props;
    return (
        <div>
        <div className="bgText">
          <Image image={BannerInfokurs} />
          <div className="imgTitle">
            <h2> {t('Infokurs.Info_Valuta')}</h2>
          </div>
        </div>
        <div className="heading">
          <div className="container">
            <div className="row col-lg-10">
              <Link to="/">{t('Infokurs.Beranda')}</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row col-lg-10 " >
            <h4>{t('Infokurs.Info_Kurs')} </h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="bg-green" rowSpan="2">{t('Infokurs.Mata_Uang')}</th>
                  <th className="bg-blue-grey" colSpan="2">{t('Infokurs.Bank_Notes')} </th>
                  <th className="bg-blue-grey" colSpan="2">{t('Infokurs.TT')}</th>
                </tr>
                <tr>
                  <th className="bg-blue-grey">{t('Infokurs.Beli_Bank')}</th>
                  <th className="bg-blue-grey">{t('Infokurs.Jual_Bank')}</th>
                  <th className="bg-blue-grey">{t('Infokurs.Beli_TT')}</th>
                  <th className="bg-blue-grey">{t('Infokurs.Jual_TT')}</th>
                </tr>
              </thead>
              <tbody>
                {rowTable}
              </tbody>
            </table>
          </div>
        </div>

        <div className="box">
          <div className="container">
            <h3 className="style">{t('Infokurs.Ketentuan')}</h3>
            <p>{t('Infokurs.Isi_Ketentuan')}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withTranslation('common')(content_infokurs)
