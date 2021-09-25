import React, {useState} from 'react';
import './App.css';
import Counter, {CounterDisplayType} from './Counter';


function App() {
    const [display, setDisplay] = useState<CounterDisplayType>({
        someNumber: 0,
        incCondition: false,
        resetCondition: false,
        error: false
    });
    if (display.someNumber > 4) {
        display.incCondition = true
        display.error = true
    } else if (display.someNumber === 0) {
        display.incCondition = false
        display.resetCondition = true
        display.error = false
    } else {
        display.incCondition = false
        display.resetCondition = false

    }

    const addValue = () => {
        display.someNumber++
        setDisplay({...display})
    };
    const resetValue = () => {
        display.someNumber = 0;
        setDisplay({...display})
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
