import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourses = () => {
   const params = useParams()
   console.log(params.coursesId);
   
  return (
    <div>{params.coursesId} courses</div>
  )
}

export default AnyCourses