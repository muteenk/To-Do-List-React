import React, { useState } from 'react'

// Component Used to create new todo 

const AddTodo = (props) => {

    // Hook for storing the value of the text entered in the input box 
    const [task, setTask] = useState("");

    // Called everytime the value is changed in the input box 
    function todoTask(e) {
        setTask(e.target.value)
    }

    // Called when ever the add todo form is submitted 
    function addTodo(e) {

        // To prevent page form reloading 
        e.preventDefault();
        
        // To check if the add todo input has some value
        if ( task !== ""){

            // length of the Todo List 
            let noOfTodos = props.list.length;

            // New todo to add in the todo list 
            let newTodo = {
                id: noOfTodos + 1,
                Title: task
            }
    
            // added new Todo to the todo_list
            props.todo_func([...props.list, newTodo])
            
            // Changing value of input field to Empty string 
            setTask("")
        }
    }

    return (
        <div className="makeToDo">
            <form onSubmit={addTodo}>
                <input type="text" onChange={todoTask} name="AddToDo" id="addTask" value={task} placeholder="Enter Task" />
                <button> Add Task </button>
            </form>
        </div>
    )
}

export default AddTodo;
