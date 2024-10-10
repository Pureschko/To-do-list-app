import React, { useReducer} from 'react';

const inputReduce = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.value;
      case 'reset':
        return '';
        default:
      return state;
  }
}
const AddToDo = ({ addTodo }) => { 
  const [newTodo, dispatch] = useReducer (inputReduce, '');

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo) return;
    addTodo(newTodo);
    dispatch({type: 'reset' }); 
  };

  return (
    <form onSubmit={handleSubmit} className='mb-4 flex'>
      <input
        type='text'
        name='todo'
        value={newTodo}
        onChange={e => dispatch({type: 'set', value: e.target.value})}
        placeholder='Add a new to-do'
        className='flex-1 border rounded px-2 py-1 mr-2'
      />
      <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
        Add
      </button>
    </form>
  );
};

export default AddToDo;