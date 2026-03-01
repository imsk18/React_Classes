import React, { useState } from 'react'

const App = () => {
 


  const [Alluser, setAlluser] = useState('')
 const [UserRoll, setUserRoll] = useState('')
 const [ImgUrl, setImgUrl] = useState('')
 const [Userdescription, setUserdescription] = useState('')
 

 const [AllInfo, setAllInfo] = useState([])


  function handleSubmit(e){
    e.preventDefault()
    console.log("submitted");

    const Olduser = [...AllInfo]
    Olduser.push({Alluser,UserRoll,ImgUrl,Userdescription})



    console.log(Alluser,UserRoll,ImgUrl,Userdescription);

   
    
    setAllInfo(Olduser)
    console.log(Olduser);

    setAlluser('')
    setUserRoll('')
    setImgUrl('')
    setUserdescription('')

  
    
    

  }
  function handleDelete(idx){
    const copyAllUser =[...AllInfo]
    const conf = confirm("are you sure to delete")
    if(conf == true){
      copyAllUser.splice(idx ,1)
      setAllInfo(copyAllUser)
    }
    else{
      alert("not deleted")
    }
    
  }


  return <div className='main'>
   


   <form onSubmit={(e)=>{handleSubmit(e)}}>

    <input 
    type="text" 
    placeholder='enter your name'
    value={Alluser}
    onChange={(e)=>{
      setAlluser(e.target.value)
    }}
    />
   
   
    <input 
    type="text" 
    placeholder='enter your role'
     value={UserRoll}
    onChange={(e)=>{
      setUserRoll(e.target.value)
    }}
    />
    
    
    <input 
    type="text" 
    placeholder='enter img url'
     value={ImgUrl}
    onChange={(e)=>{
      setImgUrl(e.target.value)
    }}
    
    />

    <input 
    type="text" 
    placeholder='enter description'
     value={Userdescription}
    onChange={(e)=>{
      setUserdescription(e.target.value)
    }}
    />

    <input className='btn' type="submit" />

   </form>


<div className="card-container">
   {AllInfo.map((e)=>{
    return <div className="card">
      <img src={e.ImgUrl} alt="" />
      
      <h1>{e.Alluser}</h1>

      <h2>{e.UserRoll}</h2>
      <h4>{e.Userdescription}</h4>
      <button onClick={(idx)=>{
        handleDelete(idx)
      }}>remove</button>
    </div>
    
  })}

  
</div>
 
  
  </div>

}

export default App