import React from 'react'
import {userContext} from '../App'

const ChildC = () => {
    const user = userContext(userContext)
  return (
    <div>
        {user.name}
    </div>
  )
}

export default ChildC