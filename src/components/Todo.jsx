import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { removeTodo } from '../Features/Todo/TodoSlice';

function Todo(){
    const dispatch=useDispatch()
    const todos=useSelector(state=>state.todo)  // to access store the we need to use the custom hook useSelector( )
    return (
    <>
        <div>Todos</div>
        {todos.map((todo)=>(
            <li className=" bg-yellow-600" key={todo.id}>{todo.text}<button onClick={()=>dispatch(removeTodo(todo.id))}>delete</button></li>
        ))}
        </>
    )
}

export default Todo;