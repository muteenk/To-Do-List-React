import React, {useState} from 'react'
import './App.css';
import Nav from './components/Nav'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import NoTodo from './components/NoTodo'

function App() {

  const [Todo_list, setTodo_list] = useState([
    {
      id: 1,
      Title: "this is a manually entered todo 1"
    },
    {
      id: 2,
      Title: "this is a manually entered todo 2"
    },
    {
      id: 3,
      Title: "this is a manually entered todo 3"
    },
    {
      id: 4,
      Title: "this is a manually entered todo 4"
    },
    {
      id: 5,
      Title: "this is a manually entered todo 5"
    },
    {
      id: 6,
      Title: "this is a manually entered todo 6"
    }
  ])


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
