import { useState } from "react";
import { apiKey } from "../config";

export const CitySearch = ( { onFound }) => {

    const [cityName, setCityName] = useState('');
    
    const getCity = (cityName) => {
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`)
        .then(res => res.json())
        .then(res => res[0])
        .then(res => {
            onFound({
                name: res.LocalizedName,
                key: res.Key,
                country: res.Country.ID
            });
        });
    };
    return (
        <div className="search-box">
            <input 
                placeholder="Type city name..."
                value={cityName}
                onChange={e => setCityName(e.target.value)}
            />
            <button onClick={() => getCity(cityName)}>Search</button>
            <button>My Location</button>
        </div>
    );
}