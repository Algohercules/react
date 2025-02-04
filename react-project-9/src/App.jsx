import { createContext } from 'react'
import ChildA from './components/ChildA';

import './App.css'

function App() {

  const userContext = createContext();

// use context hook (prop drilling)
//create 
//provide
//consume


  return (
    <div>
        <ChildA/>
    </div>
  )
}

export default App
