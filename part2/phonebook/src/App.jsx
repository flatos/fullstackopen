import { useState, useEffect } from 'react'
import axios from 'axios'
import Find from './components/Find'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personsService from './services/persons'




const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterBy, setFilterBy] = useState('')
  const [notifyMessage, setNotifyMessage] = useState(null)


  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
       })
  }, [])
  



  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
      // Check if already exists
      const match = persons.find(person => person.name === newName)
    if (match !== undefined) {
      const confirmed = confirm("Update existing user's number?")
      if (confirmed) {
        const updatedPerson = { ...match, number: newNumber }
        personsService
          .update(match.id, updatedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== match.id ? person : returnedPerson))})
      setNotifyMessage(
        `Note '${newName}' updated`
      )
        setTimeout(() => {
          setNotifyMessage(null)
        }, 2000)

      setNewName('')
      setNewNumber('')

      }
      else {
      setNewName('')
      setNewNumber('')
        return
      }
    }
    else {
    personsService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))})
      setNotifyMessage(
        `Note '${newName}' added`
      )
        setTimeout(() => {
          setNotifyMessage(null)
        }, 2000)
      setNewName('')
      setNewNumber('')
    }

  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterByChange = (event) => {
    setFilterBy(event.target.value)
  }


  const deletePerson = (id) => {
    const confirmed = confirm('Delete ' + id + '?')
    const match = persons.find(person => person.id === id)
    if (confirmed) {
      personsService
      .del(id)
      .catch(error => {
        setNotifyMessage(
          `Error: '${match.name}' was already removed from server`
        )
        setTimeout(() => {
          setNotifyMessage(null)
        }, 2000)
      })


      setPersons(persons.filter(person => person.id !== id))

      setNotifyMessage(
        `Note '${match.name}' deleted`
      )
        setTimeout(() => {
          setNotifyMessage(null)
        }, 2000)

    }
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifyMessage} />
      <Find filter={filterBy} handler={handleFilterByChange}/>

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} /> 
      <h2>Numbers</h2>
      <Persons filterBy={filterBy} persons={persons} deletePerson={deletePerson}/>

      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App

