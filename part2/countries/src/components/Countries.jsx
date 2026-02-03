
const Country = ({ name, showHandler }) => {
  return (
    <div>
      {name} <button onClick={showHandler}>Show</button>
    </div>
  )
}


const Countries = ({countries, showCountry}) => {

    if (countries.length < 2) {
        return null
    }

    return (
        countries.map(country => <Country key={country.name.common} name={country.name.common} showHandler={() => showCountry(country.name.common)} />)
    )
}

export default Countries

