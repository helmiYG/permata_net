import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { config as i18nextConfig } from "./translations";
import i18next from "i18next";

import Login from './containers/Login/Login'
import InfoKurs from './containers/InfoKurs/InfoKurs'
import Header from './components/header/Header'
import Layout from './components/hoc/layout/layout'
import Beranda from './containers//Beranda/Beranda'
import Footer from './components/footer/footer'
import Test from './containers/TestTranslate/TestTranslate'
import './App.css';

i18next.init(i18nextConfig);

class App extends Component {
  componentDidMount() {
   document.getElementsByTagName('html', 'body')[0].setAttribute('style', 'margin: 0; overflow-x: hidden')
  }
  render() {
    return (
      <I18nextProvider i18n={i18next}>
        <Layout>
          <Header />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/infokurs" component={InfoKurs} />
            <Route path="/beranda" component={Beranda} />
            <Route path="/test" component={Test} />
          </Switch>
          <Footer />
        </Layout>
      </I18nextProvider>
    );
  }
}

export default App;
