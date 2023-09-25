import Todo from '../models/Todo';
import TodoItem from './TodoItem';
import classes from '../styles/Todos.module.css';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
