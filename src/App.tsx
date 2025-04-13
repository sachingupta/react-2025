import { useState } from 'react'
import './App.css'
import {Profile} from './Profile';
import {MyButton} from './MyButton';
import { FilterableProductTable } from './FilterableProductTable';
import { ToDoApp } from './ToDoApp';

function App() {
  const [globalCount, setGlobalCount] = useState(0);
  function handleGlobalClick() {
    setGlobalCount(globalCount + 1);
  }


  return (
    <>
      <h1>React TypeScript - Playground 2025 for Sachin</h1>
      <h2>1. Counter</h2>
      <MyButton globalCount={globalCount} onGlobalClick={handleGlobalClick} />
      <MyButton globalCount={globalCount} onGlobalClick={handleGlobalClick} />
      <h2>2. Profile</h2>
      <Profile />
      <h2>3. Filterable Product Table</h2>
      <FilterableProductTable/>
      <h2>4. ToDo App</h2>
      <ToDoApp/>
    </>
  )
}

export default App
