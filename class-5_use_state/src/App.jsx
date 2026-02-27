import React, { useState } from 'react'  //import useState


const App = () => {

// const [first, setFirst] = useState(2)
const [king, setKing] = useState('who...')
const [num, setNum] = useState(0)
  
  function btnHandle(){
    console.log("clicked");
    setKing('vira kohli')
  
  }

  return (
    <div>

      <h1>{king}</h1>
      <button onClick={()=>{
        btnHandle()
      }}>change..</button>

      <h2>{num}</h2>

      <button onAuxClick={()=>{
        setNum(33)
      }}>increase</button>



    </div>
  )
}

export default App
