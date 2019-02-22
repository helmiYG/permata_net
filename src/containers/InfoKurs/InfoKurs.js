import React, { Component } from 'react'
import Image from '../../components/images/images';
import BannerInfokurs from '../../assets/images/banner-info-kurs.jpg'
import '../../containers/InfoKurs/InfoKurs.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/action/index'

import Footer from '../../components/footer/footer';

class InfoKurs extends Component {
  componentDidMount = () => {
    this.props.getDataInfo();
  }

  render() {
    let rowTable = "";
    if (this.props.infokurs === null) {
      rowTable = "loading"
    } else {
      rowTable = this.props.infokurs.map(row => {
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

    return (
      <div>
        <div className="bgText">
          <Image image={BannerInfokurs} />
          <div className="imgTitle">
            <h2> Informasi Kurs Valuta Asing</h2>
          </div>
        </div>
        <div className="heading">
          <div className="container">
            <div className="row col-lg-10">
              <Link to="/">Beranda</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row col-lg-10 " >
            <h4>Info Kurs </h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="bg-green" rowSpan="2">Mata Uang</th>
                  <th className="bg-blue-grey" colSpan="2">Bank Note</th>
                  <th className="bg-blue-grey" colSpan="2">TT(Terhadap Rp)</th>
                </tr>
                <tr>
                  <th className="bg-blue-grey">Beli</th>
                  <th className="bg-blue-grey">Jual</th>
                  <th className="bg-blue-grey">Beli</th>
                  <th className="bg-blue-grey">Jual</th>
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
            <h3 className="style">Ketentuan</h3>
            <p>
              Data kurs yang tercantum adalah benar dan hanya merupakan
              informasi kepada nasabah, bukan sebagai EQUITY ataupun acuan yang
              digunakan untuk melakukan transaksi. Data yang digunakan untuk melakukan
              transaksi adalah kurs yang berlaku saat transaksi dilakukan. Bank
              Permata dapat sewaktu-waktu melakukan perubahan terhadap data yang ada
              berdasarkan data kurs yang berlaku. Bank Permata tidak bertanggung jawab
              atas segala risiko yang ditimbulkan akibat dikeluarkannya informasi ini.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("Data", state.info.data);
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
