import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./weather.actions";

const Weather = ({ getWeatherData }) => {
  const [weatherDatas, setWeatherData] = useState([]);

  useEffect(() => {
    getWeatherData().then((data) => setWeatherData(data));
  }, []);
  console.log(weatherDatas);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherDatas.map((weatherData) => {
          const { id, name, temperature } = weatherData;
          return (
            <li key={id} className="city">
              <span className="city__name">{name}</span>
              <span className="city__temperature">{`${temperature} F`}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

const mapDispatch = {
  getWeatherData: getWeatherData,
};

const connector = connect(null, mapDispatch);
export default connector(Weather);
