import { useState } from 'react'
import './app.css'
import Card from './components/Card'

function App() {
 
//create state
//manage state
//change state
// sabhi child me state ko sync kardunga

const [name,setName] = useState('');

  return (
    <div>
      <Card name={name}/ setName={setName}>
    </div>
  )
}

export default App
