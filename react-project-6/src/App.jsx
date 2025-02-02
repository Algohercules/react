import { useState } from "react"
import LogoutBtn from './components/Logoutbtn'
import LoginBtn from './components/Loginbtn'




function App() {

const [isLoggedIn, setLoggedIn] = useState(true);


  if (isLoggedIn){
    return(
      <LogoutBtn/>
    )
  }
  else{
    return(
      <LoginBtn/>
    )
  }

  
}

export default App
