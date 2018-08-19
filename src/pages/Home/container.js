import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FETCH_GET_GISTS, FETCH_GET_COMMENTS, FETCH_GET_USER, FETCH_GET_GIST } from './api';

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    const url = 'gists/public';
    fetchData(FETCH_GET_GISTS(url));
    fetchData(FETCH_GET_COMMENTS('172e201db07617a1feacae8d145f8cf0'));
    fetchData(FETCH_GET_GIST('172e201db07617a1feacae8d145f8cf0'));
    fetchData(FETCH_GET_USER('mafesernaarboleda'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
