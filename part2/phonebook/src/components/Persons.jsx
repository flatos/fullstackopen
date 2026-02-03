
const Person = ({ name, number, deleteHandler }) => {
  return (
    <div>
      {name} {number}<button onClick={deleteHandler}>delete</button>
    </div>
  )
}


const Persons = ({filterBy, persons, deletePerson}) => {

    const filteredPersonList = () => {
    let filteredList = []
    if (filterBy === '') {
      filteredList = persons
    }
    else {
      filteredList = persons.filter(person => person.name.toLowerCase().includes(filterBy.toLowerCase()))
    } 
    return filteredList.map(person => <Person key={person.name} name={person.name} number={person.number} deleteHandler={() => deletePerson(person.id)} />)

  }

    return (
        filteredPersonList()
    )
}

export default Persons

