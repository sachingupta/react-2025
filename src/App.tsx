import { useState } from 'react'
import './App.css'
import {Profile} from './Profile';
import {Counter} from './components/Counter';
import { FilterableProductTable } from './FilterableProductTable';
import { ToDoApp } from './ToDoApp';
import { NavBar } from './components/NavBar';
import { Accordion } from './components/Accordion';
import { ContextExample } from './components/ContextExample';
import { ReduxExample } from './components/ReduxExample';
import { DataFetching } from './components/DataFetching';
import { ContactForm } from './components/Form';
import { AutocompleteContainer } from './components/Autocomplete';
import { AutocompleteContainer2 } from './components/Autocomplete2';
import { ProgressBar } from './components/ProgressBar';
import { ModalLauncer } from './components/ModalDialog';
import { TrafficLight } from './components/TrafficLight';

function App() {
  const [globalCount, setGlobalCount] = useState(0);
  function handleGlobalClick() {
    setGlobalCount(globalCount + 1);
  }

  const [hide, setHide] = useState(true);

  return (
    <>
    <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'Hide'} all example</button>
      {!hide && (<div >
      <h1>React TypeScript - Playground 2025 for Sachin</h1>
      <h2>1. Counter</h2>
      <Counter globalCount={globalCount} onGlobalClick={handleGlobalClick} />
      <Counter globalCount={globalCount} onGlobalClick={handleGlobalClick} />
      <h2>2. Profile</h2>
      <Profile />
      <h2>3. Filterable Product Table</h2>
      <FilterableProductTable/>
      <h2>4. ToDo App</h2>
      <ToDoApp/>
      <h2>5. Nav Bar</h2>
      <NavBar/>
      <h2>6. Accordion</h2>
      <Accordion/>
      <h2>7. Context Example</h2>
      <ContextExample/>

      <h2>7. Redux Example</h2>
      <ReduxExample/>

      <h2>8. Data Fetch Example</h2>
      <DataFetching/>
      <h2>9. Contact form</h2>
      <ContactForm/>
      <h2> AutoComplete</h2>
      <AutocompleteContainer />
      <h2> AutoComplete2</h2>
      <AutocompleteContainer2 />
      <h2> ProgressBar</h2>
      <ProgressBar value={10} />
      <h2> Modal Dialog</h2>
      <ModalLauncer />
      </div>)}
      <h2> Traffic Light</h2>
      <TrafficLight />
      <TrafficLight layout='horizontal' />
    </>
  )
}

export default App
