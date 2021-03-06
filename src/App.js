import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";
import Route from "./component/Route";
import Header from "./component/Header";

const items = [
    {
        title: 'What is React',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating component'
    }
];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value : 'green'
    },
    {
        label: 'The color Blue',
        value : 'blue'
    }
]



export default () => {
        const [selected, setSelected] = useState(options[0]);
       return (
        <div>
            <Header />
            
            <Route path = '/'>
                <Accordion items = {items} />
            </Route>

            <Route path = '/list'>
                <Search />
            </Route>

            <Route path = '/dropdown'>
                <Dropdown 
                    options = {options}
                    label = 'Select Color'
                    selected = {selected}
                    onSelectedChange= {setSelected}
                />
            </Route>

            <Route path = '/translate'>
                <Translate />
            </Route>
            
        </div>
    )
};