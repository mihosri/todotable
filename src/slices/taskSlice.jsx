import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

//whatever changes we want to make to the state is done by reducer function
const taskSlice = createSlice(
    {
        name: 'task',
        initialState,
        reducers: {
             addTask(state, action){
                state.push(action.payload)
             },
             deleteTask(state, action){
                const deleteIndex = action.payload;
                return state.filter((task, i) => {
                  return i !== deleteIndex
                })
                
             }
        }
    }
)

//for a reducer to be called and functioned we need action creators

//exporting action creators
export const { addTask, deleteTask } = taskSlice.actions

//exporting reducer
export default taskSlice.reducer
