import React from 'react'



const Card = (props) => {
    const clr1 = Math.floor(Math.random() * 253)
    const clr2 = Math.floor(Math.random() * 253)
    const clr3 = Math.floor(Math.random() * 253)
    
  return (
   
        <div className="all-card" style={{backgroundColor:` rgb(${clr1},${clr2},${clr3})`}}>
            <h1>{props.elem.username}</h1>
            <p>{props.elem.email}</p>
            <p>{props.elem.website}</p>
            <p>{props.elem.phone}</p>
            
    </div>
    
  )
}

export default Card