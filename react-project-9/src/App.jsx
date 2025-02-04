import { createContext } from 'react'
import ChildA from './components/ChildA';

import './App.css'
import { useState } from 'react';




  //step 1:  create context
  const userContext = createContext();

//step 2: wrap all the child inside a provider
//step 3: passing value
//step 4:consumer ke andar jaake consume kr lo


// use context hook (prop drilling)
//create 
//provide
//consume

function App() {
  const [user,setUser] = useState({name:"love"})
  return (
    <>
    <div>
        <userContext.provider value={user}>
          <ChildA />
        </userContext.provider>

    </div>
    </>
  )
}

export default App
