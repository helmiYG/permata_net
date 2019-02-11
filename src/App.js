import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './containers/Login'
import InfoKurs from './containers/InfoKurs'
import Header from './components/header/Header'
import Layout from './components/hoc/layout/layout'
import Beranda from './containers/Beranda'
import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Layout>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />  
          <Route path="/infokurs" component={InfoKurs} />
          <Route path="/beranda" component={Beranda} />
        </Switch>
      </Layout>
     </BrowserRouter>
    );
  }
}

export default App;
