import React, { Component } from 'react'

export class AddTask extends Component 
{

    initialState = {};
    state = this.initialState;

  render() 
  {
    return (
      <form>
        <label htmlFor='task'>Input your task here 💁‍♀️</label>
        <input type='text' name='task' id='task'></input>

        <input type='button' value='Add Task'/>
      </form>
    )
  }
}

export default AddTask
