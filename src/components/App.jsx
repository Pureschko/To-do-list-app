import AddToDo from "./AddToDo";
import FilterComponent from "./FilterComponent";
import ToDoList from "./ToDoList";
import { TodoProvider } from './ToDoContext';

const App = () => {
  return (
    <TodoProvider>
      <div className='container mx-auto p-4'>
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </div>
    </TodoProvider>
  );
};

export default App;