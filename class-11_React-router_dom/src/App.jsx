import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import AnyCourses from "./components/AnyCourses";
import Courses from "./components/Courses";
import CoursesDetail from "./components/CoursesDetail";
import NotFound from "./components/NotFound";


import { Route, Routes } from "react-router-dom";
const App = ()=>{
  return(
<div>
  <Navbar/>
 <Routes>
 <Route path = '/' element = {<Home/>} />
 <Route path = '/about' element = {<About/>} />
 <Route path = '/product' element = {<Product/>} />
 <Route path = '/courses' element = {<Courses/>} />

 {/* nested dynamic routes */}
 <Route path = '/courses/:coursesId' element = {<AnyCourses/>} />
 
 <Route path = '/courses/:coursesId/details' element = {<CoursesDetail/>} />

 {/* notfound router */}
  <Route path = '*' element = {<NotFound/>} />


 </Routes>


 

</div>


  );
}
export default App