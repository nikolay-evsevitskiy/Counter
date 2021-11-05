import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';
import {CounterSetting} from "./CounterSetting";

function App() {
    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [errorValue, setErrorValue] = useState<boolean>(false)
    const [errorIncrementButton, setErrorIncrementButton] = useState<boolean>(true)
    const [errorResetButton, setErrorResetButton] = useState<boolean>(true)
    const [errorSettingButton, setErrorSettingButton] = useState<boolean>(false)
    const [alertSetTitle, setAlertSetTitle] = useState<boolean>(false)
    const [errorMaxValue, setErrorMaxValue] = useState<boolean>(false)
    const [errorStartValue, setErrorStartValue] = useState<boolean>(false)

    useEffect(() => {
        getFromLocalStorage()
    }, [])

    const getFromLocalStorage = () => {
        let maxValueAsString = localStorage.getItem('maxValue')
        let startValueAsString = localStorage.getItem('startValue')
        if (maxValueAsString && startValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            let newStartValue = JSON.parse(startValueAsString)
            setMaxValue(newMaxValue)
            setStartValue(newStartValue)
        }
    }
    const setToLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    const setButton = () => {
        setValue(startValue)
        setErrorIncrementButton(false)
        setErrorSettingButton(true)
        setErrorMaxValue(false)
        setErrorStartValue(false)
        setAlertSetTitle(false)
        setToLocalStorage()
    }
    const addValue = () => {
        if (value + 1 >= maxValue) {
            setErrorIncrementButton(true)
            setErrorValue(true)
            setErrorResetButton(false)
            setValue(value + 1)
        } else {
            setErrorIncrementButton(false)
            setErrorResetButton(false)
            setValue(value + 1)
        }
    }
    const resetValue = () => {
        setErrorIncrementButton(false)
        setErrorResetButton(true)
        setErrorValue(false)
        setValue(startValue)
    }

    const changeMaxValue = (newValue: number) => {
        if (newValue <= startValue || newValue <= 0) {
            setErrorResetButton(true)
            setErrorSettingButton(true)
            setErrorMaxValue(true)
            setAlertSetTitle(false)

        } else {
            setErrorResetButton(true)
            setErrorIncrementButton(true)
            setErrorSettingButton(false)
            setErrorMaxValue(false)
            setAlertSetTitle(true)
            setErrorValue(false)
        }
        setMaxValue(newValue)
    }
    const changeStartValue = (newValue: number) => {
        if (newValue < 0 || newValue >= maxValue) {
            setErrorResetButton(true)
            setErrorSettingButton(true)
            setErrorStartValue(true)
            setAlertSetTitle(false)

        } else {
            setErrorResetButton(true)
            setErrorIncrementButton(true)
            setErrorSettingButton(false)
            setAlertSetTitle(true)
            setErrorStartValue(false)
            setErrorValue(false)
        }
        setStartValue(newValue)
    }

    return (
        <div>
            <Counter
                value={value}
                addValue={addValue}
                resetValue={resetValue}
                errorIncrement={errorIncrementButton}
                errorReset={errorResetButton}
                alertSetTitle={alertSetTitle}
                errorMaxValue={errorMaxValue}
                errorStartValue={errorStartValue}
                error={errorValue}
            />
            <CounterSetting
                startValue={startValue}
                maxValue={maxValue}
                setButton={setButton}
                error={errorSettingButton}
                setMaxValue={changeMaxValue}
                setStartValue={changeStartValue}
                errorMaxValue={errorMaxValue}
                errorStartValue={errorStartValue}
            />
        </div>
    );
}

export default App;
