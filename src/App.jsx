const Hello = () => {
  return (
    <div>
      <p>Hola mundo</p>
    </div>
  )
}
const App = () => {

  return (
    <div>
      <h1>Greetings</h1>
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  )
}

export default App
