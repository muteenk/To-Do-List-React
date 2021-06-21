import React from 'react'

const NoTodo = () => {

    // Component displayed when todo list is empty
    return (
        <div className="todo-panel">
            <div className="todo">
                <h3>No To-Do(s) to show !</h3>
            </div>
        </div>
    )
}

export default NoTodo;
