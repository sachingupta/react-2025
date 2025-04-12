import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Profile} from './Profile';
import {MyButton} from './MyButton';

function App() {
  const [globalCount, setGlobalCount] = useState(0);
  function handleGlobalClick() {
    setGlobalCount(globalCount + 1);
  }


  return (
    <>
      <h1>React TypeScript - Playground 2025 for Sachin</h1>
      <MyButton globalCount={globalCount} onGlobalClick={handleGlobalClick} />
      <MyButton globalCount={globalCount} onGlobalClick={handleGlobalClick} />
      <Profile />
    </>
  )
}

export default App
