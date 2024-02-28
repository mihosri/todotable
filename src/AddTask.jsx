import React, { Component } from 'react'
import {addTask as addTaskAction} from './slices/taskSlice'
import { useDispatch } from 'react-redux'

export class AddTask extends Component {

   dispatch = useDispatch()

  initialState = {
    task:""
  }

state = this.initialState

handleChange = (event) => {

    // const { name, value } = event.target
    // this.setState({[name]:value}) 
    const { value } = event.target
    this.dispatch(addTaskAction(value))
  }

clickSubmit = () => {
    let task = this.state
    this.props.handleSubmit(task)
    this.setState(this.initialState)
  }

  render() {

    return (
      <form>
        <label htmlFor="task">Input your task here 💁‍♀️</label>
        <input type="text" name="task" id="task" onChange={this.handleChange} value={this.state.task}></input>

        <input type="button" onClick={this.clickSubmit} value="Add Task"/>
      </form>
    )
  }
}

export default AddTask