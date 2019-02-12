import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './containers/Login'
import InfoKurs from './containers/InfoKurs'
import Header from './components/header/Header'
import Layout from './components/hoc/layout/layout'
import Beranda from './containers/Beranda'
import Footer from './components/footer/footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />  
          <Route path="/infokurs" component={InfoKurs} />
          <Route path="/beranda" component={Beranda} />
        </Switch>
        <Footer />
      </Layout>
    );
  }
}

export default App;
