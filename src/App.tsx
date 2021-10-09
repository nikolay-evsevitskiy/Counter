import React, {useState} from 'react';
import {Counter} from './Counter';
import {CounterSetting} from "./CounterSetting";


function App() {
    const [value, setValue] = useState<number>(0);
    const [errorIncrement, setErrorIncrement] = useState<boolean>(false);
    const [errorReset, setErrorReset] = useState<boolean>(true);
    const [errorSetting, setErrorSetting] = useState<boolean>(true)
    const [maxValue, setMaxValue] = useState<number>(9)
    const [startValue, setStartValue] = useState<number>(7)
    const ChangeValue = () => {
        if (startValue - 1 < 0 || maxValue - 1 <= startValue) {
            setErrorIncrement(true)
            setErrorReset(true)
            setErrorSetting(true)
        } else {
            setErrorSetting(false)
            setErrorReset(true)
            setErrorIncrement(true)
        }
    }


    const setButton = () => {
        setValue(startValue)
        setErrorIncrement(false)
        setErrorSetting(true)
    }

    const addValue = () => {
        setValue(value + 1)
        if (value + 1 >= maxValue) {
            setErrorIncrement(true)
            setErrorReset(false)
        } else {
            setErrorIncrement(false)
            setErrorReset(false)
        }
    }

    const resetValue = () => {
        setErrorIncrement(false)
        setErrorReset(true)
        setValue(startValue)

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
            <CounterSetting
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                setStartValue={setStartValue}
                setButton={setButton}
                error={errorSetting}
                changeValue={ChangeValue}
            />

        </div>
    );
}

export default App;
