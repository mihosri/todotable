import AddTask from './AddTask'

const { Component } = require('react')
/**
 *Heading for the table content
 *
 * @return {*} 
 */
const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Task</th>
        <th>Action</th>
      </tr>
    </thead>
  )
}
/**
 *Display the content from state; Utilized map method
 *state data and deleteTask received as props
 * @param {*} props
 * @return {*} 
 */
const TableBody = (props) => {
  const { taskData, deleteTaskFunc } = props
  const rows = taskData.map((task, index) => {
    return (      
        <tr key={index}>
          <td>{task.task}</td>
          <td>
            <button onClick={() => deleteTaskFunc(index) }>
              Delete
            </button>
          </td>
        </tr>
    )
  })

  return (<tbody>{rows}</tbody>)
}
/**
 *Todo is a class component that comprises the TableHead and TableBody functional components
 *
 * @class Todo
 * @extends {Component}
 */
class Todo extends Component {
  render() {
    const { deleteTaskFunc, taskData, handleSubmit } = this.props

    return (
      <>
        <AddTask handleSubmit={handleSubmit} />
        <table>
          <TableHead />
          <TableBody taskData={taskData} deleteTaskFunc={deleteTaskFunc} />
        </table>
      </>
    )
  }
}

export default Todo
