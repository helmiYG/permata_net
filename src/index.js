import React from "react";
// import { I18nextProvider } from "react-i18next";
// import i18n from "./config/i18n";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import './index.css';
import App from "./App";
import headerReducer from "./store/reducer/head";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  head: headerReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
       <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
