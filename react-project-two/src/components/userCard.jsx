import React from 'react'
import profilepic from '../assets/profilepic.jpg'
import "./userCard.css"




const UserCard = () => {
  return (
    <div className='user-container'  id='title'> 
       <p>adarsh rai</p>
       <img src={profilepic}  alt="love" id='user-image'/>
       <p id='user-description'>description of love babbar</p>
    </div>
  )
}

export default UserCard