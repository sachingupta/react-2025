import './ToDoApp.css';
import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  createdAt: number;
  dueBy: number;
  isDone: boolean;
}

const TODOs: Todo[] = [
  { id: 1, title: 'Car wash', createdAt: Date.now(), dueBy: Date.now(), isDone: false },
  { id: 2, title: 'Grocery shopping', createdAt: Date.now(), dueBy: Date.now(), isDone: false },
  { id: 3, title: 'Pay bills', createdAt: Date.now(), dueBy: Date.now(), isDone: false },
];

export function ToDoApp() {
  const [toDos, setToDos] = useState<Todo[]>(TODOs);

  function onStateChange(id: number, isDone: boolean) {
    const updatedToDos = toDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone };
      }
      return todo;
    });
    setToDos(updatedToDos);
  }

  function onRemove(id: number) {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedToDos);
  }

  function onAdd(todoText: string) {
    const maxId = toDos.reduce((max, todo) => Math.max(max, todo.id), 0);
    const newTodo = {id: maxId + 1, title: todoText, createdAt: Date.now(), dueBy: Date.now(), isDone: false}
    setToDos([...toDos, newTodo]);
  }

  function sortByCreatedTime(sortOrder: string) {
    const updatedToDos = toDos.sort((a, b) => sortOrder === 'asc' ? a.createdAt - b.createdAt : b.createdAt - a.createdAt)
    setToDos(updatedToDos); 
  }

  return (
    <>
      <div>TODO App</div>
      <ToDoList todos={toDos} onStateChange={onStateChange} onRemove={onRemove} onAdd={onAdd} />
    </>
  );
}

interface ToDoListProps {
  todos: Todo[];
  onStateChange: (id: number, isDone: boolean) => void;
  onRemove: (id: number) => void;
  onAdd: (todoText: string) => void;
}

function ToDoList({ todos, onStateChange, onRemove, onAdd }: ToDoListProps) {
  const todosItems = todos.map((todo) => (
    <li key={todo.id}>
      <ToDoItem todo={todo} onStateChange={onStateChange} onRemove={onRemove} onAdd={onAdd} />
    </li>
  ));
  todosItems.push( <li key='new-item'><AddNewToDo onAdd={onAdd}/> </li>);
  return <ul>{todosItems}</ul>;
}

interface ToDoItemProps {
  todo: Todo;
  onStateChange: (id: number, isDone: boolean) => void;
  onRemove: (id: number) => void;

}

function ToDoItem({ todo, onStateChange, onRemove}: ToDoItemProps) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={(e) => onStateChange(todo.id, e.target.checked)}
      />
      <p>{todo.title}</p>
      <button onClick={() => onRemove(todo.id)}>x</button>
    </div>
  );
}

interface AddNewToDoProps {
  onAdd: (todoText: string) => void;
}

function AddNewToDo({onAdd}: AddNewToDoProps) {
  const [text, setText] = useState('');
  return (
    <div className="todo-item">
      <input type='text' placeholder='add text' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => onAdd(text)}>Add</ button>
    </div>
  );
}