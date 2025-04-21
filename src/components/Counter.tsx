import { useState } from 'react';
export function Counter({globalCount, onGlobalClick}) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    onGlobalClick();
  }
  return <button onClick={handleClick}>Shanaya Clicked {count} times and global count = {globalCount}</button>;
}
