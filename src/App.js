import { CitySearch } from "./components/CitySearch";
import { Header } from "./components/Header";
import { WeatherCard } from "./components/WeatherCard";
import { useState, useEffect } from "react";
import { apiKey } from "./config";

export const App = () => {

  const [cityKey, setCityKey] = useState('');

  const [city, setCity] = useState('');

  const [country, setCountry] = useState('');

  const [weatherInfo, setWeatherInfo] = useState();

  const twoDigits = (num) => {
    const stringNum = num + '';
    const stringLen = stringNum.length;

    if (stringLen === 1) {
      return '0'+stringNum;
    }
    return stringNum;
    
  };

  useEffect( () => {

    const fahToCelTemperature = (fahDeg) => {
      return (fahDeg-32)/(5/9);
    }

    const avgCelTemperature = (min, max) => {
      return ((fahToCelTemperature(max)-fahToCelTemperature(min)) / 2).toFixed(1);
    }

    if (cityKey) {
      fetch(
        `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}`
      )
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setWeatherInfo(res.DailyForecasts
        .map(df => {
          return {
            temperature: avgCelTemperature(df.Temperature.Minimum.Value, df.Temperature.Maximum.Value),
            icon: twoDigits(df.Day.Icon),
            desc: df.Day.IconPhrase,
          };
        }))
      });
    }
  }, [cityKey]);

  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      <CitySearch 
        onFound={
          cityInfo => {
            setCityKey(cityInfo.key);
            setCity(cityInfo.name);
            setCountry(cityInfo.country);
          }
        }
      />
        { !!weatherInfo && weatherInfo.map ((i, index) => (
          <div key={index}>
            <WeatherCard
              cityName={city}
              countryName={country}
              temperature={i.temperature}
              icon={i.icon}
              desc={i.desc}
            />
          </div>
        ))}
    </div>
  );
}

