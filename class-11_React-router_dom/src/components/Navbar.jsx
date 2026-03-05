import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>navbar</h1>
        <input type="text"
        style={{color:'black'}}
        placeholder='Search'
         />
        {/* <a href="/">Home</a>
        <a href="/about">about</a>
        <a href="/product">product</a> */}
{/* ✅Link tag reload ko rokta hai */}
<div className="link">
      <Link to = '/'>home</Link>
        <Link to = '/about'>about</Link>
        <Link to = '/product'>Product</Link>
        <Link to = '/courses'>courses</Link>
</div>
      
       
    </div>
  )
}

export default Navbar