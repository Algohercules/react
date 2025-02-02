
function App() {

function handleClick(){
        alert ("i am clicked")
}

function handleTouseOver(){
  alert ("para ke upar mouse lekar aaye ho")
}

  return (
    <div>
      <button onClick={handleClick}>
          click me  
      </button>

      <p onMouseOver={handleTouseOver}>
         this is the most prominent website you will ever be visiting
      </p>

 {/* after 10 mins  */}
  
    </div>
  )
}

export default App
