import { useState } from "react";
import './NavBar.css';

const tabs = [
    { title: "Tab 1", content: "This is the content of Tab 1." },
    { title: "Tab 2", content: "Content for Tab 2 goes here." },
    { title: "Tab 3", content: "Tab 3 displays this information." },
    { title: "Tab 4", content: "Here's the content for Tab 4." },
    { title: "Tab 5", content: "Finally, the content of Tab 5." },
];

export function NavBar() {
    const [activeTab, setActiveTab] = useState(0);
    const tabElements = tabs.map((tab, index) => {
        return (
        <li key={index} 
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
           >
            {tab.title}
        </li>)
    });

    return (<>
        <div> NavBar </div>
        <ul className='tab-list'>{tabElements}</ul>
        <div>
            {tabs[activeTab] && <p>{tabs[activeTab].content}</p>}
        </div>
    </>);
}