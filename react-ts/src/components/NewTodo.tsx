import { useRef, useContext } from 'react';
import classes from '../styles/NewTodo.module.css';
import { TodosContext } from '../store/todos-context';
const NewTodo: React.FC = () => {

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  
  const todosCtx = useContext(TodosContext);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    /* Solo usar ! esta anotacion si esta 100% que no llegara nulo */
    /*  const enteredText = todoTextInputRef.current?.value */
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
