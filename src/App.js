import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { config as i18nextConfig } from "./translations";
import { connect } from 'react-redux'
import i18next from "i18next";

// import * as action from '../src/store/action/index'
import Login from './containers/Login/Login'
import InfoKurs from './containers/InfoKurs/InfoKurs'
import Header from './components/header/Header'
import Layout from './components/hoc/layout/layout'
import Beranda from './containers/Beranda/Beranda'
import Footer from './components/footer/footer'
import './App.css';

i18next.init(i18nextConfig);

class App extends Component {
  componentDidMount() {
   document.getElementsByTagName('html', 'body')[0].setAttribute('style', 'margin: 0; overflow-x: hidden')
  console.log(this.props)
  }
  render() {

    let removeFooter
      let page = this.props.page;
      if(page !== 'Beranda'){
        removeFooter = <Footer/>
      }

    return (
      <I18nextProvider i18n={i18next}>
        <Layout>
          <Header />
          <div className="set-bellow-navbar">
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/infokurs" component={InfoKurs} />
              <Route path="/beranda" component={Beranda} />
            </Switch>
          </div>
          {removeFooter}
        </Layout>
      </I18nextProvider>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.head.page,'----------')
  return{
    page: state.head.page
  }
}

export default connect(mapStateToProps,null)(App);
