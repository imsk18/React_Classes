import React, { useState } from "react";

const app = ()=>{

    const [Username, setUsername] = useState('')
    const [Alluser, setAlluser] = useState([])

    function handlingSubmit(e){
        e.preventDefault()
       
        
        console.log("submitted");
       const newAlluser = [...Alluser]
       newAlluser.push(Username)
       console.log(newAlluser);
       setAlluser(newAlluser)
       setUsername('')
       
        
    }
    return <div>
    
      <h1>hello</h1>

      <form onSubmit={(e)=>{handlingSubmit(e)}}>
        <input 
        type="text"
        placeholder="enter your name"
        required
        value={Username}
        onChange={(e)=>{setUsername(e.target.value);
        }}
         />
         <input type="submit" />
      </form>


     {Alluser.map((e)=>{
        return <h1>{e}</h1>
     })}

    </div>

}
export default app