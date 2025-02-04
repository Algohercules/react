import { createContext } from 'react'
import ChildA from './components/ChildA';

import './App.css'

function App() {


  //step 1:  create context
  const userContext = createContext();

//step 2: wrap all the child inside a provider


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
