export const WeatherCard = ({
    cityName,
    countryName,
    temperature,
    icon,
    desc
}) => {
    return (
        <div className="weather-card">
            City Name: {cityName}
            Country Name: {countryName}
            Temp: {temperature}
            Icon: {icon}
            Desc: {desc}
        </div>
    );
}