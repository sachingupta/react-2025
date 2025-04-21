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

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }  

export function AutocompleteContainer2() {
    const [suggestions, setSuggestions] = useState([] as string[]);
    const [query, setQuery] = useState("");

    const fetchData = async (query: string): Promise<string[]> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=^${query}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const postTitles = data.map((post : Post) => post.title);
        return postTitles;
    };

    const handleChange = async (searchQuery: string) => {
        setQuery(searchQuery);
        const results = await fetchData(searchQuery);
        setSuggestions(results);
    };

    return (
        <div> 
            <h2>Welcome Search</h2>
            <Autocomplete suggestions={suggestions} searchQuery={query} onChange={handleChange} />
        </div>
    );
}

function Autocomplete({suggestions, searchQuery, onChange}) {
    const suggestionsElements = suggestions.map(suggestion => (<li> {suggestion}</li>));
    return (
        <div>
            <input type="text" value={searchQuery} onChange={(e) => onChange(e.target.value)} />
            <ul>{suggestionsElements}</ul>
        </div>
    );
}