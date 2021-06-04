import React, {useState} from 'react'
import './App.css';
import Nav from './components/Nav'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import NoTodo from './components/NoTodo'

function App() {

  const [Todo_list, setTodo_list] = useState([])


  function deleteTodo(todo) {
      setTodo_list( 
        Todo_list.filter( (e) => {
        return e !== todo
      }))
  }



  function editTodo(newTask, todo) {
    console.log(newTask)
    console.log(todo)
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

    console.log(Todo_list)
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
