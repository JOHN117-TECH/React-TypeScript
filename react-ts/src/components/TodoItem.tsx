import React from 'react';
import Todo from '../models/Todo';
import classes from '../styles/TodoItem.module.css';

const TodoItem: React.FC<{
  item: Todo;
  onRemoveTodo: () => void;
}> = ({ item, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {item.text}
    </li>
  );
};

export default TodoItem;
