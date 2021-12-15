export const WeatherCard = ({
    cityName,
    countryName,
    temperature,
    icon,
    desc
}) => {
    return (
        <div 
        className="weather-card md:w-1/3 sm:w-1/2 m-auto border b-gray-400 rounded
            flex flex-col justify-center items-center text-center p-6 bg-white">
            <div className="text-xl font-bold flex flex-row text-gray-900">
                <div>
                    {cityName}
                </div>
                <span className="inline-block justify-self-start m-2 rounded text-white bg-blue-500 px-2 text-xs font-bold mr-3">
                    {countryName}
                </span>
            </div>

            <div className="w-1/3">
                <img
                    className="w-full"
                    alt={desc}
                    src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
                />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-6">
                {temperature}
            </div> 
            <p className="text-gray-700 mb-2">
                {desc}
            </p>
        </div>
    );
}