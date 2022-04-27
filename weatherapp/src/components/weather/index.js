import "./weather.css"
import React from 'react'

import { weatherConditions } from "../../utilities/weatherConditions ";

const Weather = ({ state }) => {

    return (
        <div className="weatherContainer">
            <div className="headerContainer">
                <h2 className="title">
                    {state.location}, {state.countrylocation}
                </h2>
            </div>
            <div className="headerContainer">
                <h1>
                    <i className={`wi ${weatherConditions[state.weatherCondition].icon} display-1`} />
                </h1>
            </div>
            <div className="bodyContainer">
                <p className="title">{weatherConditions[state.weatherCondition].title}</p>
                <p className="subtitle">{weatherConditions[state.weatherCondition].subtitle}</p>
            </div>

            <div className="headerContainer">
                <h1 className="tempText">{state.temperature}&deg;</h1>
            </div>

            <div className="headerContainer">
                <h2 className="title">feels like: {state.feelsLike}&deg;</h2>
            </div>
            <div className="bodyContainer">
                <p className="subtitle">
                    [min]: {state.tempmin}&deg; [max]: {state.tempmax}&deg;
                </p>
                
            </div>
        </div>
    );
};

    /* <MaterialCommunityIcons size={170} 
        name={weatherConditions[state.weatherCondition].icon} 
        color={'#fff'} /> */

export default Weather;
