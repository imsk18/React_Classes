import React, { useEffect, useState } from "react";

const app = ()=>{
  let num = 0
  const [counter, setcounter] = useState(0)
  const [username, setusername] = useState('')
  useEffect(()=>{
    console.log("hii");
      
    
  },[counter]) // yanha jo dependencies pass karenge wahi chalegi
  return(
    
    <div>
      <input type="text" 
      placeholder="type here"
      value={username}
      onChange={(elem)=>{
        // console.log(elem.target.value);
        setusername(elem.target.value)
        
      }
        
      }
      />
      <h1>{counter}</h1>
      <button onClick={()=>{
           setcounter(counter+1)
    
      }}>increase</button>

    </div>
  )
}
export default app