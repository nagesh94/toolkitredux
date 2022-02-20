import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {

    const data=useSelector((state)=>state.xyz.value);
    console.log(data)
  return (
    <div>{data.map((d)=>
        {
          return  <h1>{d}</h1>
        })}</div>
  )
}

export default Display