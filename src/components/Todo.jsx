import React from 'react'

const Todo = (props) => {


    // This is the Todo Component inside the Todo Box


    // Called when Edit button is clicked 
    function editThis() {
        
        let edited = prompt("Edit Task", props.data.Title)

        if (edited){
            props.edit(edited, props.data);
        }

    }

    return (
        <div className="todo-panel">
            <div className="todo">
                <h4>{props.data.Title}</h4>
                <div className="todo-btns">
                    <button id="edit" onClick={editThis} ><i className="fa fa-pencil"></i></button>
                    <button id="delete" onClick={() => { props.delete(props.data) }}><i className="fa fa-trash-o"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Todo
