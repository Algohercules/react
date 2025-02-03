
import { useEffect } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  //first --> side-effect function
  //second --> clean up function
  //third -->  comma separated dep list

useEffect(()=>{
  first 

  return() =>{
    second
  }
}, [third])

  return (
    <div>
        hello ji
    </div>
  )
}

export default App
