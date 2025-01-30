import React from 'react'
import profilepic from '../assets/profilepic.jpg'
import "./userCard.css"




const UserCard = (props) => {
  return (
    <div className='user-container'  id='title'> 
       <p>{props.name}</p>
       <img src={props.image}  alt={love} id='user-image'/>
       <p id='user-description'>description of love babbar</p>
    </div>
  )
}

export default UserCard