import React from 'react'
import { useNavigate } from 'react-router'

const Footer = () => {
   const navigate =  useNavigate()
  return (
    <div className='footer'>
        <h1>footer</h1>
        <button  onClick={()=>{
            navigate('/product')
        }}>
            Explore All collection 
        </button>

    </div>
  )
}

export default Footer