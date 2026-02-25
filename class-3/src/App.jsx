import React from "react"
import "./app.css";
import Box from './components/Card';
import Button  from "./components/Button";
import Card2 from "./components/Card2";

const app = ()=>{

  const arr = ['sk','rk' , 'vk']
 
  return <div> 
    
  <Box user = "sk" age = {26}/>
  <Box user = "rk" age = {26}/>
  <Box user = "vk" age = {26}/>

  <Button text = 'more info' />
  <Button text = 'buy now' />


{arr.map((elem)=>{
  return <Card2 user ={elem}  />
})}

  
    
   
 
  </div>
}

export default app