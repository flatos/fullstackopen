const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Sydney"/>
      <Hello name="Blonk"/>
      <Hello name="Blanafan"/>
    </div>
  )
}

export default App
