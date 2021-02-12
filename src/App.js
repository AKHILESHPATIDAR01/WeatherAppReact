import React from 'react';
import logo from './logo.svg';
import './App.css';
import City from './Component/City';
import CityWeather from './Component/CityWeather';



function App() {
  const [cityName , setCityName] = React.useState("");

  const fetchCityWeather = () =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4deb3d5b5a9ba1475a3e91881ff30ce9`).then((res) => res.json()).then((result)=> {
      console.log("Result is ",result);
    }) ;
  };
  return (
    <>
        <City cityName={cityName} setCityName={setCityName} fetchCityWeather={fetchCityWeather} />
        <CityWeather />
    </>
  );
}

export default App;
