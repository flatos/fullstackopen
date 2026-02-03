import { useState, useEffect } from 'react'
import axios from 'axios'
import Find from './components/Find'
import Countries from './components/Countries'
import CountryInfo from './components/CountryInfo'
import Notification from './components/Notification'

import countriesService from './services/countries'
import weatherService from './services/weather'




const App = () => {
  const [countries, setCountries] = useState([]) 
  const [selectedCountries, setSelectedCountries] = useState([]) 
  const [filterBy, setFilterBy] = useState('')
  const [notifyMessage, setNotifyMessage] = useState(null)
  const [wxCountry, setWxCountry] = useState('poland')
  const [wxData, setWxData] = useState(null)

  

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
       })
  }, [])
  
  useEffect(() => {
    weatherService
      .get(wxCountry)
      .then(wxdata => {
        setWxData(wxdata)
       })
  }, [wxCountry])



  const handleFilterByChange = (event) => {
    const newFilter = event.target.value
    setFilterBy(newFilter)
    if (newFilter.length === 0) {
      setSelectedCountries([])
    }
    else {
      const clist = countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase())) 
      setSelectedCountries( clist )
      if (clist.length === 1) {}
        setWxCountry(clist[0].name.common)
        setWxData(null)
    }
    
    
    }
  


  const showCountry = (name) => {
    const clist =  countries.filter(country => country.name.common.toLowerCase().includes(name.toLowerCase())) 
      setSelectedCountries( clist )
      if (clist.length === 1) {
        setWxCountry(clist[0].name.common)
        setWxData(null)
  }
}




  return (
    <div>
      <Notification message={notifyMessage} />
      <Find filter={filterBy} handler={handleFilterByChange}/>

      <Countries countries={selectedCountries} showCountry={showCountry}/>
      <CountryInfo countries={selectedCountries} weather={wxData}/>

    <div> Debug: {filterBy} </div>
    </div>
  )
}

export default App

