import React from 'react'
import Navbar from './component/Navbar'
import Omen from './component/Omen'
import Men from './component/Men'


function App() {

 function handleClicked(){
    console.log("button clicked!!");
    
 }

   const user1 = 
    {
        name:'rupesh',
        gender: 'male',
        age:2,
    
    }
   
   const user2 = 
    {
         name:'nira',
        gender: 'female',
        age:19
    
    }
   
  return (
    <div>
    <Navbar color = 'crimson'link = {['home','about' ,'education', 'project']}/>
    <Navbar color = 'lightblue'link = {['home','about' ,'education', 'project']}/>
   
    {user2.gender == 'male'?<Men/>:<Omen/>}


    <button
    onClick={handleClicked}
    style={{backgroundColor:'darkgoldenrod'}}>click to see</button>
 

    </div>
  )
}

export default App
