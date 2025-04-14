import { useState } from 'react';
import './Accordion.css';

const items = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "How does React work?",
      content: "React creates a virtual DOM that it updates efficiently.",
    },
    {
      title: "What are components?",
      content: "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.",
    },
    {
      title: "What is JSX?",
      content: "JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like.",
    },
    {
      title: "How to handle events in React?",
      content: "Events are handled using camelCase naming convention and event handlers are passed as functions.",
    },
  ];

export function Accordion() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleItem = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div>
      {items.map((item, index) => {
        const isActive = expandedIndex === index;
        return (
        <div key={index}>
            <div className='accordion-item'>
          <button onClick={() => toggleItem(index)}>{item.title}  <div>{isActive ? '-' : '+'}</div></button>
          </div>
          {index === expandedIndex && <div>{item.content}</div>}
        </div>
      )})}
    </div>
  );
}