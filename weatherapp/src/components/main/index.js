import "./main.css"
import React, { Component } from "react"

import Weather from "../weather"
import City from "../city"

const URL_API = "https://api.openweathermap.org/data/2.5/weather"
const KEY = "1e14c9961b01b549746bff384ab999ba"

export default class Main extends Component {
  state = {
    isLoading: false,
    location: null,
    countrylocation: null,
    temperature: 0,
    feelsLike: 0,
    tempmin: 0,
    tempmax: 0,
    weatherCondition: null,
    sunrise: 0,
    sunset: 0
  }
  
   componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: 'Error Retriving Weather Conditions'
        })
      }
    )
  }

  async fetchWeather(lat, lon) {
    await fetch(
      `${URL_API}?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`
    )
    .then( res => res.json())
    .then(data => {
      this.setState({
        isLoading: false,
        location: data.name,
        countrylocation: data.sys.country,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        tempmin: data.main.temp_min,
        tempmax: data.main.temp_max,
        weatherCondition: data.weather[0].main,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
        })
    })
  }

  render() {
    const { isLoading } = this.state

    return (
      <div className="container">
        {isLoading ? (
          <div className="loadingContainer">
              <h3 className="loadingText">Fetching Your Weather</h3> 
          </div>
          ) : (
          <div>
              <Weather state={this.state} />
              <City/>
          </div>
        )}
      </div>
    )
  }

}
