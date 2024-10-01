import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { removeTodo } from '../Features/Todo/TodoSlice';

function Todo(){
    const dispatch=useDispatch()
    const todos=useSelector(state=>state.todo)  // to access store the we need to use the custom hook useSelector( )
    return (
    <>
        <div className="text-white">Todos</div>
        {todos.map((todo)=>(
            <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>{todo.text}<button onClick={()=>dispatch(removeTodo(todo.id))} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">delete</button></li>
        ))}
        </>
    )
}

export default Todo;