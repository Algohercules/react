import UserCard from "./components/userCard"
import userCard from "./components/userCard"

 import profilepic from '../assets/profilepic.jpg'

function App() {


  return (
    <>
      <div className="container">
        <UserCard name="adarsh rai "  image={profilepic} />
        <UserCard name="maharana pratap"/>        
        <UserCard  name= "prithviraj chauhan"/>        
      </div>
    </>
  )
}

export default App
