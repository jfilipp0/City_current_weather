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
        // if you give your current position
        this.fetchWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        // if you not give your position will appear the London, GB position
        this.fetchWeather(51.5072, -0.1276) 
        this.setState({
          error: 'Error Retriving Weather Conditions'
        })
      }
    )
  }

  async fetchWeather(lat, lon) {
    if (lat === null || lon === null ){
      lat = 53.344
      lon = -6.2672
    }
    await fetch(`${URL_API}?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`,{
      method: 'GET',
      cache: 'no-cache',
    })
      .then( (res) => res.json())
      .then( (data) => {
        console.log(data)

        this.setState({
          isLoading: false,
          location: data.name,
          countrylocation: data.sys.country,
          temperature: this.float2int(data.main.temp),
          feelsLike: this.float2int(data.main.feels_like),
          tempmin: this.float2int(data.main.temp_min),
          tempmax: this.float2int(data.main.temp_max),
          weatherCondition: data.weather[0].main,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset
          })
      })
  }

  float2int(value) {
    return Math.ceil(value) | 0;
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
