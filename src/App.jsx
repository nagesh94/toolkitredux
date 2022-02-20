import { useEffect, useState } from 'react'

import './App.css'
import { useDispatch } from 'react-redux'
import { addUser } from './redux/slice'
import Display from './Display'

function App() {

const dispatch=useDispatch()
const [value,setValue]=useState("")
const [data,setData]=useState([])
  const changeHandler=(event)=>
  {
    setValue(event.target.value)
  }

  const addData=()=>
  {
    setData([...data,value])
  }
  console.log(data)

  useEffect(()=>{
    dispatch(addUser(data))
  },[data])


  return (
    <div className="App">
      <input type="text"  onChange={changeHandler}></input>
      <button onClick={addData}>addme</button>
      <Display/>
    </div>
  )
}

export default App
//useSelector -data fetching from store
//useDispatch -to send data to store