import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { removeTodo,addtodo } from '../Features/Todo/TodoSlice'

function Addtodo(){
const[input,setInput]=useState("")
const dispatch =useDispatch()
const addTodoHandler=(e)=>{
    e.preventDefault()
    dispatch(addtodo(input))
    setInput("")
}
    return (
        <form onSubmit ={addTodoHandler} className="space-x-3 mt-12">
            <div className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> 
            <input type="text" className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus :ring-2 focus:ring-indigo-900 text-base outline-none text-gray- bg-green--400" placeeholder="enter todo ..." value={input} onChange={(e)=>setInput(e.target.value)} required/></div> 
            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bbg-indigo-600 rounded text-lg">Add todo</button>
        </form>
    )
}

export default Addtodo;