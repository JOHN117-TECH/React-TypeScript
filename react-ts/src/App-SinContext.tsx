import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {
  /*  const todos = [new Todo('learn React'), new Todo('learn TypeScript')];
   */

  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHanddler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      {/*  <Todos items={['learn React', 'learn TypeScript']} /> */}
      {/* <NewTodo onAddTodo={addToDoHanddler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
    </div>
  );
}

export default App;
