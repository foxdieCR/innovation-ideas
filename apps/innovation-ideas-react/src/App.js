import React, { Component } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

let PATH = 'http://localhost:4001/api/'
if (process.env.NODE_ENV === 'production') {
  PATH = '/api/'
}

class App extends Component {
  componentDidMount() {
    axios.get(PATH).then(result => {
      console.log(result)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
