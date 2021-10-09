import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';


function App() {
    const [value, setValue] = useState<number>(0);
    const [error, setError] = useState<boolean>(true);


    const addValue = () => {
        if (value >= 4) {
            setError(false) } else {
            setError(true)
        }
        setValue(value + 1)
    };

    const resetValue = () => {
       setValue(0)
        setError(true)
    };

    return (
        <div>
            <Counter
                value={value}
                addValue={addValue}
                resetValue={resetValue}
                error={error}
            />

        </div>
    );
}

export default App;
