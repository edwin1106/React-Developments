import React, { useState } from 'react'
import Convert from './Convert';
import Dropdown from './Dropdown'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];

const Translate = () => {

    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown options={options} label="Select a Language" selected={language} onSelectedChange={setLanguage} />
            <hr/>
            <Convert text={text} language={language}/>

        </div>
    );
};

export default Translate