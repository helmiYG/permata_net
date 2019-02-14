import React, { Component } from 'react'
import Image from '../../components/images/images';
import BannerInfokurs from '../../assets/images/banner-info-kurs.jpg'
import '../../containers/InfoKurs/InfoKurs.css';
import { Link } from 'react-router-dom'

class InfoKurs extends Component {
  render() {
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
        <div class="container">
          <div class="row col-lg-10 " >
            <h4>Info Kurs</h4>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th className="bg-green" rowspan="2">Mata Uang</th>
                  <th className="bg-blue-grey" colspan="2">Bank Note</th>
                  <th className="bg-blue-grey" colspan="2">TT(Terhadap Rp)</th>
                </tr>
                <tr>
                  <th className="bg-blue-grey">Beli</th>
                  <th className="bg-blue-grey">Jual</th>
                  <th className="bg-blue-grey">Beli</th>
                  <th className="bg-blue-grey">Jual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AUD</td>
                  <td>9,776.50</td>
                  <td>10,153.35</td>
                  <td>9,776.50</td>
                  <td>10,138.35</td>
                </tr>
                <tr>
                  <td>CAD</td>
                  <td>-</td>
                  <td>-</td>
                  <td>10,408.20</td>
                  <td>10,783.65</td>
                </tr>
                <tr>
                  <td>CHF</td>
                  <td>13,797.50</td>
                  <td>14,276.15</td>
                  <td>13,812.50</td>
                  <td>14,261.15</td>
                </tr>
                <tr>
                  <td>DKK</td>
                  <td>-</td>
                  <td>-</td>
                  <td>2,057.70</td>
                  <td>2,203.00</td>
                </tr>
                <tr>
                  <td>EUR</td>
                  <td>15,598.65</td>
                  <td>16,196.90</td>
                  <td>15,613.65</td>
                  <td>16,181.90</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="box">
          <div className="container">
            <h3 className="style" >Ketentuan</h3>
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
      </div>
    )
  }
}

export default InfoKurs
