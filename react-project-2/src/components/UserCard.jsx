import React from 'react'
import myphoto from '../assets/myphoto.jpg'
import './UserCard.css'


const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='user-name'>adarsh rai</p>
        <img  id='user-img' src= {myphoto} alt="love" />
        <p id='user-desc'>description of adarsh</p>
    </div>
  )
}

export default UserCard