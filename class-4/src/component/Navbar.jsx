import React from 'react'

const Navbar = (props) => {
  console.log(props.color);
  
  return (
    <div>
      <div className="navbar" style={{backgroundColor:props.color}}>
       {props.link.map((elem,index)=>{
        return <h2 key= {index}>{elem}</h2>
        
       })}

      </div>
      
    </div>
  )
}

export default Navbar
