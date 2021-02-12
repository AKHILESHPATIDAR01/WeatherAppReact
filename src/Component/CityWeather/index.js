import React from 'react';

const CityWeather = (weather) => {
    // console.log(weather);
    // console.log(weather.weather.name);

    // const {data} = cityWeather;
    return (
        <div>
            <div>
                <div> City Name =  {weather.weather.name} </div>
                Wind Speed = {weather.weather.wind.speed} 
            </div>
        </div>
    );
};

export default CityWeather;