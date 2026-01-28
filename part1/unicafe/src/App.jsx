
import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Display = ({text, count}) => {
  if (count === 0) {
    return (<tr><td></td><td></td></tr>)
  }

    return (<tr><td>{text}</td><td>{count}</td></tr>)
}

const StatisticLine = ({text, value}) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}


const Statistics = ({good, neutral, bad}) => {
  let denom = good + neutral + bad
  if (denom === 0) {
    return <tr><td>No feedback given</td></tr>
  }
  return (
    <>
      <StatisticLine text='all' value={good + neutral + bad} />
      <StatisticLine text='average' value={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text='positive' value={good / (good + neutral + bad)} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <table>
        <tbody>
      <Display text='good' count={good} />
      <Display text='neutral' count={neutral} />
      <Display text='bad' count={bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
      </tbody>
      </table>
    </div>
  )
}

export default App






