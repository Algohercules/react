
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'


function App() {

  //first --> side-effect function
  //second --> clean up function
  //third -->  comma separated dep list

// useEffect(()=>{
//   first 

//   return() =>{
//     second
//   }
// }, [third])


// variation:1
  //runs on every render

  useEffect(() => {
        alert("i will run on each render")
  })
   
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count+1)
}

//useEffect hook har bar renddr hone se pehle use ho jata hai


return (
    <div>
        <button onClick={handleClick}>
          click me
        </button>
        <br />
        count is : {count}
    </div>
  )
}

export default App
