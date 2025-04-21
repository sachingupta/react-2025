/**
 * Build a Reusable Autocomplete Component:

Implement an autocomplete component in React that fetches suggestions from an API as the user types.
Consider performance optimization (debouncing, caching), accessibility (aria attributes), and user experience (handling loading states, error states).
This tests your React skills, API interaction, and attention to detail.
https://phillcode.hashnode.dev/create-reusable-react-components
Statefull Containers will be the components that know all about your data state, and none or very little about interaction state.

Stateless Presenters are the components we've been discussing so far, the reusable ones. They know nothing about data state, and everything about interaction state.
 */

import { useEffect, useState } from "react";

export function AutocompleteContainer() {
    const [names, setNames] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            const names = json.map(user => user.name);
            setNames(names);
        };
        fetchData();
      }, []);

    return (
        <div> 
            <h2>Welcome Search</h2>
            <Autocomplete options={names} value={name} onChange={setName} />
        </div>
    );
}

function Autocomplete({options, value, onChange}) {
    const suggestions = value?.length ? options.filter(opt => opt.includes(value)) : [];
    const suggestionsElements = suggestions.map(suggestion => (<li> {suggestion}</li>));
    return (
        <div>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
            <ul>{suggestionsElements}</ul>
        </div>
    );
}