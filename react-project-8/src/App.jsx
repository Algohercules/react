
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'


function App() {


  

const [count, setCount] = useState(0);
const [total, setTotal] = useState(1)

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

  // useEffect(() => {
  //       alert("i will run on each render")
  // })


  //variation:2
  //runs on only first render
   
// useEffect(() => {
//    alert("i will run on only first render")
// }, [])

//variation : 3
// useEffect(() => {
//       alert("i will run everytime the count is up")
// }, [count])



//variation : 4
//multiple dependencies

// useEffect(() => {
//    alert("i will everytime when count/total is updated")
// }, [count, total])



//variation:5
// is baar lets add cleanup  function
// useEffect(() =>{
//     alert("count is updated")

//     return() => {
//       alert("count is updated on ui")
//     }
//   },[count])




function handleClick() {
  setCount(count+1)
  
}


function handleClickTotal(){
  setTotal(total+1)

}



//useEffect hook har bar renddr hone se pehle use ho jata hai


return (
    <div>
        <button onClick={handleClick}>
          update count
        </button>
        <br />
        count is : {count}

<br />
<br />
<br />

        <button onClick={handleClickTotal}>
          update total
        </button>
        <br />
        total  is : {total}
    </div>
  )
}

export default App
