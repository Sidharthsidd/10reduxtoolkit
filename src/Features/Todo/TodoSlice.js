import { createSlice ,nanoid} from "@reduxjs/toolkit";
const initialState={
    todo:[{id:1,text:"hello world"}]
}

export const todoSlice=createSlice({
    name:'todo',      //slice as its own name 
    initialState,     
    reducers:{
        addtodo:(state,action)=>{
            const todo={id :nanoid(),text:action.payload}
            state.todo.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todo=state.todo.filter((todo)=>todo.id!==action.payload)
        },
        
    }
})

export const {removeTodo,addtodo }=todoSlice.actions

export default todoSlice.reducer;

