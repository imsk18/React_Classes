import React from "react";

const Box = (props) => {
    console.log(props);
    
  return (
    <div className='card'>
       <h1>{props.user},{props.age}</h1>
        
      
    </div>
  )
}

export default Box
