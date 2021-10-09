import React, {useState} from 'react';
import {Counter} from './Counter';


function App() {
    const [value, setValue] = useState<number>(0);
    const [errorIncrement, setErrorIncrement] = useState<boolean>(false);
    const [errorReset, setErrorReset] = useState<boolean>(true);


    const addValue = () => {

        setValue((v) => {
            if (v >= 4) {
                setErrorIncrement(true)
                setErrorReset(false)
            } else {
                setErrorIncrement(false)
                setErrorReset(false)
            }
            return v + 1
        })
    };

    const resetValue = () => {
        setErrorIncrement(false)
        setErrorReset(true)
        setValue(0)

    };

    return (
        <div>
            <Counter
                value={value}
                addValue={addValue}
                resetValue={resetValue}
                errorIncrement={errorIncrement}
                errorReset={errorReset}
            />

        </div>
    );
}

export default App;
