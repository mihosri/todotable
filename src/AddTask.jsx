import React, { Component } from 'react'

export class AddTask extends Component 
{
  render() 
  {
    return (
      <form>
        <label htmlFor='task'>Input your task here 👇</label>
        <input type='text' name='task'></input>

        <button type='submit'>Add Task</button>
      </form>
    )
  }
}

export default AddTask
