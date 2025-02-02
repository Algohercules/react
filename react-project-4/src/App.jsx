import Card from './components/Card'
import './App.css'
import Button from './components/Button'

function App() {
    const [count , setCount] = useState(0);

    function handleClick() {
      setCount(count+1);
    }

  return (
   <div>
        {/* <Button handleClick = {handleClick} text="clickk me">
          <h1>{count} </h1>
          </Button> */}

          
       {/* <Card name='love babbar'>
        <h1> best web dev course</h1>
        <p>trying to be consistent in this</p>
        <p>
          will complete this course soon
        </p>
        </Card> */}
   </div>
  )
}

export default App
