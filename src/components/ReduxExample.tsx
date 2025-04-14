import { useState } from 'react';
import { createStore } from 'redux';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) =>

 {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export function ReduxExample() {
    const [count, setCount] = useState(store.getState().count);

  store.subscribe(() => {
    setCount(store.getState().count);
  });

  const increment = () => {
    store.dispatch({ type: 'INCREMENT', payload: 1 });
  };

  const decrement = () => {
    store.dispatch({ type: 'DECREMENT', payload: 1 });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}