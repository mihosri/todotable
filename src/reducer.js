let lastId = 0;


export default function reducer(state = [], action)
{
    if(action.type === 'taskAdded')
    {
        return [...tasks, {id: ++lastId, task: action.payload.task}]
    }
    else if(action.type === 'taskCompleted')
    {
        return state.filter((task) => {task.id !== action.payload.id})
    }
    else{
        return state;
    }
}