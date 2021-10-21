import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';
import {CounterSetting} from "./CounterSetting";

type  StatePropsType = {
    value: number
    errorIncrementButton: boolean
    errorResetButton: boolean
    errorSettingButton: boolean
    maxValue: number
    startValue: number
    alertSetTitle: boolean
    errorMaxValue: boolean
    errorStartValue: boolean
    errorValue: boolean
}

function App() {
    const [state, setState] = useState<StatePropsType>({
        value: 0,
        maxValue: 0,
        startValue: 0,
        errorValue: false,
        errorIncrementButton: true,
        errorResetButton: true,
        errorSettingButton: false,
        alertSetTitle: false,
        errorMaxValue: false,
        errorStartValue: false
    })

    useEffect(() => {
        getFromLocalStorage()
    }, [])

    const getFromLocalStorage = () => {
        let maxValueAsString = localStorage.getItem('maxValue')
        let startValueAsString = localStorage.getItem('startValue')
        if (maxValueAsString && startValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            let newStartValue = JSON.parse(startValueAsString)
            setState({...state, maxValue: newMaxValue, startValue: newStartValue})
        }
    }
    const setToLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
    }

    const setButton = () => {
        setState({
            ...state,
            value: state.startValue,
            errorIncrementButton: false,
            errorSettingButton: true,
            errorMaxValue: false,
            errorStartValue: false,
            alertSetTitle: false
        })
        setToLocalStorage()
    }
    const addValue = () => {
        if (state.value + 1 >= state.maxValue) {
            setState({
                ...state,
                errorIncrementButton: true,
                errorValue: true,
                errorResetButton: false,
                value: state.value + 1
            })
        } else {
            setState({
                ...state,
                errorIncrementButton: false,
                errorResetButton: false,
                value: state.value + 1
            })
        }
    }
    const resetValue = () => {

        return setState({
            ...state,
            errorIncrementButton: false,
            errorResetButton: true,
            errorValue: false,
            value: state.startValue
        })
    }
    const changeValue = (startValue: number, maxValue: number) => {
        if (startValue < 0) {
            setState({
                ...state,
                errorResetButton: true,
                errorSettingButton: true,
                startValue: startValue,
                maxValue: maxValue,
                errorStartValue: true,
                alertSetTitle: false
            })
        } else if (maxValue <= startValue) {
            setState({
                ...state,
                errorResetButton: true,
                errorSettingButton: true,
                startValue: startValue,
                maxValue: maxValue,
                errorMaxValue: true,
                alertSetTitle: false
            })
        } else {
            setState({
                ...state,
                errorResetButton: true,
                errorIncrementButton: true,
                errorSettingButton: false,
                startValue: startValue,
                maxValue: maxValue,
                errorMaxValue: false,
                errorStartValue: false,
                alertSetTitle: true,
                errorValue: false
            })
        }
    }
    const setMaxValue = (newValue: number) => {
        setState({...state, maxValue: newValue})
        changeValue(state.startValue, newValue)
    }
    const setStartValue = (newValue: number) => {
        setState({...state, startValue: newValue})
        changeValue(newValue, state.maxValue)
    }

    return (
        <div>
            <Counter
                value={state.value}
                addValue={addValue}
                resetValue={resetValue}
                errorIncrement={state.errorIncrementButton}
                errorReset={state.errorResetButton}
                alertSetTitle={state.alertSetTitle}
                errorMaxValue={state.errorMaxValue}
                errorStartValue={state.errorStartValue}
                error={state.errorValue}
            />
            <CounterSetting
                startValue={state.startValue}
                maxValue={state.maxValue}
                setButton={setButton}
                error={state.errorSettingButton}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                errorMaxValue={state.errorMaxValue}
                errorStartValue={state.errorStartValue}
            />
        </div>
    );
}

export default App;
