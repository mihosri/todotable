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
             }
        }
    }
)

//for a reducer to be called and functioned we need action creators

//exporting action creators
export const { addTask } = taskSlice.actions

//exporting reducer
export default taskSlice.reducer
