import React from 'react'

const Button = (props) => {
    console.log(props);
    
  return (
    <div className='btn'>
       {props.text}
      
    </div>
  )
}

export default Button
