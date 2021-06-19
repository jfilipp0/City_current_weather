import './App.css'
import React, { Component } from "react"
import Routes from './router'

// git project https://github.com/erikflowers/weather-icons
import "weather-icons/css/weather-icons.css"

class App extends Component {

  render() {
    return (
      <div id="Render" className="App">
        <Routes />
      </div>)
  }
}

export default App
