import React from 'react'

function Card2(props) {
    console.log(props);
    
  return (
    <div className='card2'>
       {props.user}
      
    </div>
  )
}

export default Card2
