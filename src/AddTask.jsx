import React, { Component } from 'react'

export class AddTask extends Component {

  /**
   *This is used to set the state of form back after submitting the data
   *
   * @memberof AddTask
   */
  initialState = {
    task:""
  }
/**
 *Current state value
 *
 * @memberof AddTask
 */
state = this.initialState
/**
 *When the user gives input, correspondingly attach it to the state
 *
 * @param {*} event
 * @memberof AddTask
 */
handleChange = (event) => {
    const {name, value} = event.target;
   this.setState({[name]:value}) 
  }
/**
 *This event handler uses the handleSubmit method from App component through props
 *
 * @memberof AddTask
 */
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
