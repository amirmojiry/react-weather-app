import { useState } from "react";
import { apiKey } from "../config";

export const CitySearch = ( { onFound }) => {

    const [cityName, setCityName] = useState('');
    
    const getCity = (cityName) => {
        fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`)
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
        <div className="search-box mb-5 flex justify-center">
            <input className="p-1 px-2 mx-1 rounded
            outline-none text-gray-800"
                placeholder="Type city name..."
                value={cityName}
                onChange={e => setCityName(e.target.value)}
            />
            <button
            className="text-base focus:outline-none mx-1
            flex justify-center px-4 py-2 rounded font-bold
            hover:bg-teal-200 
            bg-teal-100 
            text-teal-700 border
            border-teal-600 transition"
            onClick={() => getCity(cityName)}>
                Search
                </button>
            <button
            className="text-base focus:outline-none mx-1
            flex justify-center px-4 py-2 rounded font-bold
            hover:bg-gray-200  
            bg-gray-100 
            text-gray-700 
            border
            border-gray-600"
            >
                My Location
                </button>
        </div>
    );
}