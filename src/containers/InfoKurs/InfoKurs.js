import React, { Component } from 'react'
import Image from '../../components/images/images';
import BannerInfokurs from '../../assets/images/banner-info-kurs.jpg'
import '../../containers/InfoKurs/InfoKurs.css';

class InfoKurs extends Component {
  render() {
    return (
      <div >
        <Image image={BannerInfokurs} />
        <div className="heading">
          <div className="container">
            <h1>Info Kurs</h1>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Mata Uang</th>
                  <th>Bank Note</th>
                  <th>TT(Terhadap Rp)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AUD</td>
                  <td>9,761</td>
                  <td>10,153</td>
                </tr>
                <tr>
                  <td>CAD</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>CHF</td>
                  <td>13,797</td>
                  <td>14,276</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className="heading box">
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
