import React, {useEffect, useState} from 'react'

// Main CSS File 
import './App.css'; 

// Components 
import Nav from './components/Nav'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import NoTodo from './components/NoTodo'

function App() {

  // An Array of Todos at initail state
  let initTodo;

  // Checking for the key "todos" in local storage
  if(localStorage.getItem("todos") === null){
    
    // If key Doesn't exist, initailize an empty array
    initTodo = []
  }
  else{

    // If key exists, parse in and use as inital state 
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  // Hook for storing all the Todos 
  const [Todo_list, setTodo_list] = useState(initTodo)

  // Called Everytime changes are made in Todo_list
  useEffect(() => {

    // Storing Todo_list as todo in localStorage
    localStorage.setItem("todos", JSON.stringify(Todo_list))
  }, [Todo_list])


  // Called when delete button is pressed on any todo for that specific todo
  function deleteTodo(todo) {
      setTodo_list( 
        Todo_list.filter( (e) => {
        return e !== todo
      }))
  }


  // Called when delete button is pressed on any todo for that specific todo
  function editTodo(newTask, todo) {
    setTodo_list(
      Todo_list.map( e => {
        if (e === todo){
          return{
            id: todo.id,
            Title: newTask
          }
        }
        else{
          return e;
        }
      })
    )
  }

  

  return (
    <>
      <Nav/>

      {/* To Add TODOs  */}
      <AddTodo list={Todo_list} todo_func={setTodo_list} />

      <div className="todo-box">
        {
          // To show todos and no todos 
          Todo_list.length > 0 ? Todo_list.map(e => {return <Todo data={e} edit={editTodo} delete={deleteTodo} key={e.id} />}) : <NoTodo/> 
        }
      </div>
    </>
  );
}

export default App;
