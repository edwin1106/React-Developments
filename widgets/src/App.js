import React, { useState } from 'react';
import Accordion from './components/Accordion'
import Dropdown from './components/Dropdown';
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

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Dropdown 
            selected={selected} 
            onSelectedChange={setSelected}
            options={options}
            />
        </div>
    ); 
};

export default App;