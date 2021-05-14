import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontEnd javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library amon engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const App = () => {
    return (
        <div>
            <Accordion
            items={items}
            />
        </div>
    ); 
};

export default App;