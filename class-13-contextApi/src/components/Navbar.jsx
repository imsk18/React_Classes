import React from 'react'

const Navbar = (props) => {
    console.log(props.children);
    
  return (
    <div className='navbar'>
        {props.children}
    </div>
  )
}

export default Navbar