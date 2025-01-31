import React from 'react';
import './Mounter.css'




const Counter = () => {
  
  const [Count, setCount] = useState(0);

  return (
    <div  className='counter-container'>
        <p id="para">you have clicked me {Count} times</p>
        <button id="btn" onClick={()=> {setCount(Count+1) }}>click me</button>
    </div>
  )
}

export default Counter