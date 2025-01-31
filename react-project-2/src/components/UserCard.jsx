import React from 'react'
import myphoto from '../assets/myphoto.jpg'
import './UserCard.css'


const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img  id='user-img' src= {myphoto} alt="love" />
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard