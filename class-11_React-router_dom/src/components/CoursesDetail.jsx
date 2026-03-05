import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {
  const params =   useParams()
  return (
    <div> {params.coursesId}  Cours details</div>
  )
}

export default CoursesDetail