import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>navbar</h1>
        <div className="link">
           
        {/* <Link to = '/'>home</Link>
        <Link to = '/home'>about</Link>
        <Link to = '/home'>product</Link> */}

        <NavLink to = '/'
        style={({isActive})=>({
            color:isActive?'red':'white'
        })}
        >
        home
        </NavLink>

        <NavLink to = '/about' style={({isActive})=>({
            color:isActive?'red':'white'
        })}>
        about
        </NavLink>

        <NavLink to = '/product' style={({isActive})=>({
            color:isActive?'red':'white'
        })}>
        product
        </NavLink>

        </div>
       
    </div>
  )
}

export default Navbar