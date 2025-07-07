import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Table'
import Form from './Form'
import Card from './Card'
import Componente from './Componente'

function App() {
  const [count, setCount] = useState(0)
  
function contador(){
  setCount(count + 1)
}

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      
      <Componente/>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <button onClick={contador}>
          count is {count}
        </button> */}
        {/* <button onClick={function(){
          setCount(count + 1)
        }}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <div>
        {/* <h1>Mi tabla en React</h1>
        <Table/> */}
      </div>
      {/* <div>
        <Form/>
      </div>
      <div>
        <Card/>
      </div> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
