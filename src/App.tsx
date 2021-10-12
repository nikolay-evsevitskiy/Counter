import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';
import {CounterSetting} from "./CounterSetting";

type  StatePropsType = {
    value: number
    errorIncrement: boolean
    errorReset: boolean
    errorSetting: boolean
    maxValue: number
    startValue: number
    alertSetTitle: boolean
    incorrectValue: boolean
    error: boolean
}

function App() {

    const [state, setState] = useState<StatePropsType>({
        value: 0,
        error: false,
        errorIncrement: true,
        errorReset: true,
        errorSetting: true,
        maxValue: 0,
        startValue: 0,
        alertSetTitle: false,
        incorrectValue: false
    })
    useEffect(() => {
        getFromLocalStorage()
    }, [ ])

    useEffect(() => {
        setToLocalStorage()
    }, [state])

    const getFromLocalStorage = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setState({...state, value: newValue})
        }
        let errorAsString = localStorage.getItem('error')
        if (errorAsString) {
            let newError = JSON.parse(errorAsString)
            setState({...state, error: newError})
        }
        let errorIncrementAsString = localStorage.getItem('errorIncrement')
        if (errorIncrementAsString) {
            let newErrorIncrement = JSON.parse(errorIncrementAsString)
            setState({...state, errorIncrement: newErrorIncrement})
        }
        let errorResetAsString = localStorage.getItem('errorReset')
        if (errorResetAsString) {
            let newErrorReset = JSON.parse(errorResetAsString)
            setState({...state, errorReset: newErrorReset})
        }
        let errorSettingAsString = localStorage.getItem('errorSetting')
        if (errorSettingAsString) {
            let newErrorSetting = JSON.parse(errorSettingAsString)
            setState({...state, errorSetting: newErrorSetting})
        }
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setState({...state, maxValue: newMaxValue})
        }
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setState({...state, startValue: newStartValue})
        }
        let alertSetTitleAsString = localStorage.getItem('alertSetTitle')
        if (alertSetTitleAsString) {
            let newAlertSetTitle = JSON.parse(alertSetTitleAsString)
            setState({...state, alertSetTitle: newAlertSetTitle})
        }
        let incorrectValueAsString = localStorage.getItem('incorrectValue')
        if (incorrectValueAsString) {
            let newIncorrectValue = JSON.parse(incorrectValueAsString)
            setState({...state, incorrectValue: newIncorrectValue})
        }
    }
    const setToLocalStorage = () => {
        localStorage.setItem('counterValue', JSON.stringify(state.value))
        localStorage.setItem('error', JSON.stringify(state.error))
        localStorage.setItem('errorIncrement', JSON.stringify(state.errorIncrement))
        localStorage.setItem('errorReset', JSON.stringify(state.errorReset))
        localStorage.setItem('errorSetting', JSON.stringify(state.errorSetting))
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
        localStorage.setItem('alertSetTitle', JSON.stringify(state.alertSetTitle))
        localStorage.setItem('incorrectValue', JSON.stringify(state.incorrectValue))
    }

    const setButton = () => {
        setState({
            ...state,
            value: state.startValue,
            errorIncrement: false,
            errorSetting: true,
            incorrectValue: false,
            alertSetTitle: false
        })
    }
    const addValue = () => {
        if (state.value + 1 >= state.maxValue) {
            setState({
                ...state,
                errorIncrement: true,
                error: true,
                errorReset: false,
                value: state.value + 1
            })
        } else {
            setState({
                ...state,
                errorIncrement: false,
                errorReset: false,
                value: state.value + 1
            })
        }
    }
    const resetValue = () => {

        return setState({
            ...state,
            errorIncrement: false,
            errorReset: true,
            error: false,
            value: state.startValue
        })
    }
    const changeValue = (startValue: number, maxValue: number) => {
        if (startValue < 0 || maxValue <= startValue) {
            setState({
                ...state,
                errorReset: true,
                errorSetting: true,
                startValue: startValue,
                maxValue: maxValue,
                incorrectValue: true,
                alertSetTitle: false
            })
        } else {
            setState({
                ...state,
                errorReset: true,
                errorIncrement: true,
                errorSetting: false,
                startValue: startValue,
                maxValue: maxValue,
                incorrectValue: false,
                alertSetTitle: true,
                error: false
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
                errorIncrement={state.errorIncrement}
                errorReset={state.errorReset}
                alertSetTitle={state.alertSetTitle}
                incorrectValue={state.incorrectValue}
                error={state.error}
            />
            <CounterSetting
                startValue={state.startValue}
                maxValue={state.maxValue}
                setButton={setButton}
                error={state.errorSetting}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                incorrectValue={state.incorrectValue}
            />
        </div>
    );
}

export default App;
