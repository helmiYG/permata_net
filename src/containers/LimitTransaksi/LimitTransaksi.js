import React, { Component } from "react";
import Image from "../../components/images/images";
import BannerLimitTransaksi from "../../assets/images/banner-info-limit.png";
import "../../containers/LimitTransaksi/LimitTransaksi.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/action/index";

import Footer from "../../components/footer/footer";

class Limit extends Component {
  componentDidMount = () => {
    this.props.getLimit();
  };

  render() {
    let rowTable = "";
    if (this.props.limit === null) {
      rowTable = "loading";
    } else {
      rowTable = this.props.limit.map(row => {
        return (
          <tr>
            <td>test</td>
            <td>{row.Priority}</td>
            <td>{row.Preferred}</td>
            <td>{row.Personal}</td>
            <td>{row.Bintang}</td>
            <td>{row.Me}</td>
          </tr>
        );
        //console.log( "hasil", row);
      });
    }

    return (
      <div>
        <div className="bgText">
          <Image image={BannerLimitTransaksi} />
          <div className="imgTitle">
            <h2> Limit Transaksi Harian PermataNet</h2>
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
          <div className="row col-lg-10 ">
            <h4>Limit Transaksi Harian</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="bg-green" rowSpan="1">
                    Transaksi
                  </th>
                  <th className="bg-blue-grey" colSpan="1">
                    Kartu PRIORITY
                  </th>
                  <th className="bg-blue-grey" colSpan="1">
                    Kartu PREFERRED
                  </th>
                  <th className="bg-blue-grey" colSpan="1">
                    Kartu PERSONAL
                  </th>
                  <th className="bg-blue-grey" colSpan="1">
                    Kartu BINTANG
                  </th>
                  <th className="bg-blue-grey" colSpan="1">
                    Kartu ME
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="1">
                    <strong>Transfer Ke Rekening
                    <br />
                    Sendiri di PermataBank*</strong>
                    <br />
                    <br />
                    minimal per
                    transaksi Rp. 10,000.00 
                    <br />
                    maksimal per transaksi Unlimited{" "}
                  </td>
                  <td>Tidak Terbatas</td>
                  <td>Tidak Terbatas</td>
                  <td>Tidak Terbatas</td>
                  <td>Tidak Terbatas</td>
                  <td>Tidak Terbatas</td>
                </tr>
                {rowTable}
              </tbody>
            </table>
          </div>
        </div>

        <div className="box">
          <div className="container">
            <h3 className="style">Ketentuan</h3>
            <p>
              - Dengan mata uang yang sama (IDR)
              <br />
              - Dari rekening valas ke rekening IDR atau sebaliknya (Nominal
              transaksi dalam IDR)
              <br />- Limit max per transaksi untuk transfer ke Bank lain
              melalui LLG(SKN) adalah mengikuti limit transaksi (limit RTGS &
              LLG/SKN merupakan limit gabungan) Limit max per transaksi untuk
              RTGS adalah mengikuti limit transaksi (limit RTGS & LLG/SKN
              merupakan limit gabungan)
            </p>
            <p>
              Limit transaksi dapat berubah sewaktu - waktu tanpa pemberitahuan
              terlebih dahulu.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.limit.data);
  
  return {
    limit: state.limit.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLimit: () => dispatch(actionTypes.getDataLimit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Limit);
