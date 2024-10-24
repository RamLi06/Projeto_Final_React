import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function incrementar(){

      setCount(count + 1);
  }
  function decrementar(){

    setCount(count - 1);
}

  return (
    <>
      <h1>Contador</h1>
    <div id ='botão'>
      <button className='botao' onClick={incrementar}>Incrementar</button>
      <button className='botao' onClick={decrementar}>Decrementar</button>
      <p>{count}</p>
      </div>
   </>
   )
   
  }
export default App
