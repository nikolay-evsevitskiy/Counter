import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';
let state = {someNumber: 0, incDisabledValue: false, resetDisabledValue: false};

function App() {
    let [display, setDisplay] = useState<number>(state.someNumber);
    const addValue = () => {
        state.someNumber === 5 ? state.someNumber = 5 : state.someNumber++;
        setDisplay(state.someNumber)

    };
    const resetValue = () => {
        state.someNumber = 0;
        setDisplay(state.someNumber)
    };

    let incDisabledValue
    if (display === 5) {
        incDisabledValue = true
    } else {
        incDisabledValue = false
    }


    return (
        <div className="App">
            <Counter counterDisplay={display}
                     addValue={addValue}
                     resetValue={resetValue}
            />

        </div>
    );
}

export default App;
