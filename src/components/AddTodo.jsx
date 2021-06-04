import React, { useState } from 'react'

const AddTodo = (props) => {

    const [task, setTask] = useState("");

    function todoTask(e) {
        setTask(e.target.value)
    }

    function addTodo(e) {

        e.preventDefault();
        
        let noOfTodos = props.list.length;

        let newTodo = {
            id: noOfTodos + 1,
            Title: task
        }

        props.todo_func([...props.list, newTodo])
    }

    return (
        <div className="makeToDo">
            <form onSubmit={addTodo}>
                <input type="text" onChange={todoTask} name="AddToDo" placeholder="Enter Task" />
                <button> Add Task </button>
            </form>
        </div>
    )
}

export default AddTodo;
