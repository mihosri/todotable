import { Component } from "react";
import Todo from "./todo";

class App extends Component() 
{
  state = {
    tasks: ["study","cook","work","sing","laundry","clean"]
  }

  deleteTask = (index) => 
  {
    const {tasks} = this.state;

    let filteredData = tasks.filter((task, i) => {
      return i!== index;
    })

    this.setState({tasks: filteredData});
  }

  render(){
    return (
      <div>
        <Todo deleteTaskFunc={this.deleteTask} taskData={this.state.tasks} />
      </div>
    )
  }
  
}

export default App;