import React, { createContext } from 'react'
export const userData = createContext()
const Usercontext = (props) => {
    const data = ['kumar']
  return (
   <Usercontext.Provider value={data}>
    {props.children}
   </Usercontext.Provider>
        
    
  )
}

export default Usercontext