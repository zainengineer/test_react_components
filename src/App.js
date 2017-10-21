import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExtendGrid from './components/extend';
import simpleData from './components/data/simple_data';
import store from './redux/store/grid_data'
import { Provider } from 'react-redux'


class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <ExtendGrid { ...simpleData } />
      </div>
        </Provider>
    );
  }
}

export default App;
