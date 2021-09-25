import React, {useState} from 'react';
import './App.css';
import Counter, {CounterDisplayType} from './Counter';


function App() {
    const [display, setDisplay] = useState<CounterDisplayType>({
        someNumber: 0,
        incCondition: false,
        resetCondition: false
    });

    const newDisplay = {
        someNumber: display.someNumber,
        incCondition: display.incCondition,
        resetCondition: display.resetCondition
    };
    const addValue = () => {
        if (newDisplay.someNumber > 4) {
            newDisplay.incCondition = true
        } else {
            newDisplay.incCondition = false
            newDisplay.resetCondition = false
            newDisplay.someNumber++
        }
        setDisplay(newDisplay)
    };
    const resetValue = () => {
        newDisplay.someNumber = 0;
        newDisplay.incCondition = false
        newDisplay.resetCondition = true
        setDisplay(newDisplay)
    };

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
