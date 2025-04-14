import { createContext, useContext, useState } from "react";

interface MyContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }

  const MyContext = createContext<MyContextType>({count: 0, setCount: () => {} });

export function ContextExample() {
    const [count, setCount] = useState(0);

    return (
        <MyContext.Provider value={{count, setCount}}>
            <ChildComponent/>
        </MyContext.Provider>
    );
}

const ChildComponent = () => {
    const {count, setCount} = useContext(MyContext);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            </div>
    );
}