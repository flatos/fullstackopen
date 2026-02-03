
const Weather = ({weather}) => {
    if (weather === null) {
        return null
    }
    return (
      <div>
        <h2>Weather in {weather.name}</h2>
        <div>temperature {weather.main.temp} Celsius</div>

      </div>
    )
}


const CountryInfo = ({countries, weather}) => {
    if (countries.length !== 1) {
        return null
    }
    return (
      <div>
        <h1>{countries[0].name.common}</h1>
        <div>capital {countries[0].capital}</div>
        <div>area {countries[0].area}</div>
        <h2>languages:</h2>
        <ul>
          {Object.values(countries[0].languages).map(language => <li key={language}>{language}</li>)}
        </ul>
        <img src={countries[0].flags.png} alt={countries[0].flags.alt}></img>
        <Weather weather={weather} />
      </div>
    )
}

export default CountryInfo

