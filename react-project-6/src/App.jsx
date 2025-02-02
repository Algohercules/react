import { useState } from "react"
import LogoutBtn from './components/Logoutbtn'
import LoginBtn from './components/Loginbtn'



//conditional rendering
    //if else
    //ternary operator
    //logical operator
    //early return



function App() {

const [isLoggedIn, setLoggedIn] = useState(true);


return (
  <div>
    <h1>
      welcome everone to this website
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </h1>
  </div>
)




// return (
//   <div>
//     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
//   </div>
// )



  // if (isLoggedIn){
  //   return(
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }

  
}

export default App
