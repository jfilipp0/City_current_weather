import "./weather.css"
import React from 'react'
import PropTypes from 'prop-types'

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
                <p className="subtitle">
                    {weatherConditions[state.weatherCondition].subtitle}
                </p>
            </div>

            <div className="headerContainer">
                <h1 className="tempText">{state.temperature}˚</h1>
            </div>

            <div className="headerContainer">
                <h2 className="title">feels like: {state.feelsLike}˚</h2>
            </div>
            <div className="bodyContainer">
                <p className="subtitle">
                    [min]: {state.tempmin}˚ [max]: {state.tempmax}˚
                </p>
                
            </div>
        </div>
    );
};


    /* <MaterialCommunityIcons
        size={170}
        name={weatherConditions[state.weatherCondition].icon}
        color={'#fff'} /> */

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherCondition: PropTypes.string
};

export default Weather;
