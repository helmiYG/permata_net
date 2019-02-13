import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Login from './containers/Login/Login'
import InfoKurs from './containers/InfoKurs/InfoKurs'
import Header from './components/header/Header'
import Layout from './components/hoc/layout/layout'
import Beranda from './containers//Beranda/Beranda'
import Footer from './components/footer/footer'
import Test from './containers/TestTranslate/TestTranslate'
import './App.css';

class App extends Component {
  componentDidMount() {
   document.getElementsByTagName('html', 'body')[0].setAttribute('style', 'margin: 0; overflow-x: hidden')
  }
  render() {
    return (
      <Layout>
        <Header />
        <div className="set-bellow-navbar">
          <Switch>
            <Route path="/" exact component={Login} />  
            <Route path="/infokurs" component={InfoKurs} />
            <Route path="/beranda" component={Beranda} />
            <Route path="/test" component={Test} />
          </Switch>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default App;
