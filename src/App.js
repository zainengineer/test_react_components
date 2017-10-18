import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicGrid from './components/basic_grid';
import BasicPager from './components/basic_pager';
import PagerStore from './store/pager';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <BasicGrid/>
          <BasicPager {...PagerStore.getState()}  />
      </div>
    );
  }
}

export default App;
