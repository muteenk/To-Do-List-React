import React from 'react'

const Todo = () => {
    return (
        <div className="todo-panel">
            <div className="todo">
                <h4>This is a task enter manually</h4>
                <div className="todo-btns">
                    <button id="edit"><i className="fa fa-pencil"></i></button>
                    <button id="delete"><i className="fa fa-trash-o"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Todo
