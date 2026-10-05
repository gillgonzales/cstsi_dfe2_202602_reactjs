/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef } from 'react';

import './App.css';
import TodoFields from './components/TodoFields/TodoFields';
import ListTodo from './components/ListTodo/ListTodo';
import { StateTodosList, TodosListProvider } from './context/TodosListProvider';

function App() {
  const {
    listTodos,
  } = useContext(StateTodosList);

  const inputTitle = useRef();
  const inputText = useRef();

  useEffect(() => {
    console.table(listTodos);
  }, [listTodos]);

  return (
    <>
        <h1>React ToDoApp</h1>
        <TodoFields inputText={inputText} inputTitle={inputTitle} />
        <div className="card">
          {listTodos.length > 0 ? (
            <ListTodo  inputText={inputText} inputTitle={inputTitle}  />
          ) : (
            <p>Crie e organize suas tarefas!!!</p>
          )}
        </div>
    </>
  );
}

export default App;
