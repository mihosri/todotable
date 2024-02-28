import { configureStore } from '@reduxjs/toolkit'; 
import taskReducer from './slices/taskSlice'

//reducer is like a state for the store

const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
})



export default store;