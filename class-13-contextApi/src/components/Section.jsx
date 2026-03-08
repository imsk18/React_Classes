import React, { useContext } from 'react'

const Section = (props) => {
   const usercontextdata =  useContext(userData)
   console.log(usercontextdata);
   
  return (
    <div id='section'>
        {props.children[0]}
        {props.children[1]}
       
    </div>
  )
}

export default Section