import React, {useEffect, useState} from 'react'
import './App.css';
import Nav from './components/Nav'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import NoTodo from './components/NoTodo'

function App() {

  let initTodo;

  if(localStorage.getItem("todos") === null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const [Todo_list, setTodo_list] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todo_list))
  }, [Todo_list])


  function deleteTodo(todo) {
      setTodo_list( 
        Todo_list.filter( (e) => {
        return e !== todo
      }))
  }



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
