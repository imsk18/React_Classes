import React, { useEffect, useState } from "react";
import axios from 'axios'
import Card from "./component/Card";


const app  = ()=>{
  
  const [AllData, setAllData] = useState([])
async function getData(){
    console.log("getting data....");
   const res =  await axios.get('https://jsonplaceholder.typicode.com/users')

    
    console.log(res.data);
    setAllData(res.data)
    
    
    
  }
// getData() //bar bar chalega
useEffect(()=>{
  getData()
},[])
  return(

    <div className="mm">
      <h1><button>Get data</button></h1>
      {AllData.map((elem,idx)=>{
        return <div >
        
         <Card elem = {elem}/>
        </div>
      })}
    </div>
  )
}
export default app