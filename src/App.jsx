import { useState } from "react"

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  return (
    <StatisticsLine text={props.text} value={props.value} />
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClickGood = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1

    setGood(updatedGood)
    setAll(updatedAll)
    setAverage((updatedGood - bad) / updatedAll)
    setPositive((updatedGood * 100) / updatedAll)
  }

  const handleClickNeutral = () => {
    const updatedAll = all + 1

    setNeutral(neutral + 1)
    setAll(updatedAll)
    setAverage((good - bad) / updatedAll)
    setPositive((good * 100) / updatedAll)
  }

  const handleClickBad = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1

    setBad(updatedBad)
    setAll(updatedAll)
    setAverage((good - updatedBad) / updatedAll)
    setPositive((good * 100) / updatedAll)
  }

  if (all > 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleClickGood} text="good" />
        <Button onClick={handleClickNeutral} text="neutral" />
        <Button onClick={handleClickBad} text="bad" />
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistics text='good' value={good} />
            <Statistics text='neutral' value={neutral} />
            <Statistics text='bad' value={bad} />
            <Statistics text='all' value={good + neutral + bad} />
            <Statistics text='average' value={average.toFixed(1)} />
            <Statistics text='positive' value={positive.toFixed(1) + '%'} />
          </tbody>
        </table>
      </div>
    ) 
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleClickGood} text="good" />
        <Button onClick={handleClickNeutral} text="neutral" />
        <Button onClick={handleClickBad} text="bad" />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    ) 
  }
}

export default App
