import './App.css';
import Nav from './components/Nav'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import NoTodo from './components/NoTodo'

function App() {
  return (
    <>
      <Nav/>

      {/* To Add TODOs  */}
      <AddTodo/>

      <div className="todo-box">
        <Todo/>
        <NoTodo/>
      </div>
    </>
  );
}

export default App;
