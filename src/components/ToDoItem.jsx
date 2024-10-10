import { useContext } from 'react';
import { TodoContext } from './ToDoContext';

const ToDoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext); // Извлекаем dispatch из контекста

  const toggleTodo = id => {
    dispatch({ type: 'toggle', id });
  };

  return (
    <li className='flex items-center mb-2'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className='mr-2'
      />
      {todo.text}
    </li>
  );
};

export default ToDoItem;