import React, {useEffect, useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
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
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter a Text</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
            options={options}
            selected= {language}
            onSelectedChange = {setLanguage}
            label = 'Select Language'
            />
            <hr />
            <h3 className="ui header" >Output</h3>
            <Convert language={language} text={text} />
        </div>
    )
}

export default Translate;