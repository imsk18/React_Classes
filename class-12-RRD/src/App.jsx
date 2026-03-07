import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import Menproduct from "./components/pages/Menproduct";
import Women from "./components/pages/Women";
import Footer from "./components/pages/Footer";
import { createBrowserRouter, Route, Routes } from "react-router";

const App = ()=>{

  // createBrowserRouter()    //topic are left 
  return(
    <div>
    <Navbar/>
   
   <Routes>
   <Route path='/' element = {<Home/>}/>
   <Route path='/about' element = {<About/>}/>

   <Route path='/product' element = {<Product/>}>
   <Route path = '/product/men' element = {<Menproduct/>}/>
   <Route path = '/product/women' element = {<Women/>}/>
   </Route>
   </Routes>
      <Footer/>
    </div>
  )
}
export default App