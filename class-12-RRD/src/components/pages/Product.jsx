import React from 'react'
import { Outlet } from 'react-router'

const Product = () => {
  return (
    <div>
        <div className="sale">
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
            <p>sale is live !!!</p>
        </div>

        <h1 style={{textAlign:'center'}}>All collection</h1>
    {/* <h2 style={{color:'yellow'}}>all collection</h2> */}
   <Outlet/>
    </div>

   
  )
}

export default Product