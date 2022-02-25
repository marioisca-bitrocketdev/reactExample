import React from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const params = useParams();

    console.log(params)
  return (
    <div>Detail</div>
  )
}
