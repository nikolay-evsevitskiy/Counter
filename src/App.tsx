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
        errorSettingButton: true,
        alertSetTitle: false,
        errorMaxValue: false,
        errorStartValue: false
    })
    useEffect(() => {
        getFromLocalStorage()
    }, [])
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
            setState({...state, errorValue: newError})
        }
        let errorIncrementAsString = localStorage.getItem('errorIncrement')
        if (errorIncrementAsString) {
            let newErrorIncrement = JSON.parse(errorIncrementAsString)
            setState({...state, errorIncrementButton: newErrorIncrement})
        }
        let errorResetAsString = localStorage.getItem('errorReset')
        if (errorResetAsString) {
            let newErrorReset = JSON.parse(errorResetAsString)
            setState({...state, errorResetButton: newErrorReset})
        }
        let errorSettingAsString = localStorage.getItem('errorSetting')
        if (errorSettingAsString) {
            let newErrorSetting = JSON.parse(errorSettingAsString)
            setState({...state, errorSettingButton: newErrorSetting})
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
        let errorMaxValueAsString = localStorage.getItem('errorMaxValue')
        if (errorMaxValueAsString) {
            let newIncorrectValue = JSON.parse(errorMaxValueAsString)
            setState({...state, errorMaxValue: newIncorrectValue})
        }
        let errorStartValueAsString = localStorage.getItem('errorStartValue')
        if (errorStartValueAsString) {
            let newIncorrectValue = JSON.parse(errorStartValueAsString)
            setState({...state, errorStartValue: newIncorrectValue})
        }
    }
    const setToLocalStorage = () => {
        localStorage.setItem('counterValue', JSON.stringify(state.value))
        localStorage.setItem('errorValue', JSON.stringify(state.errorValue))
        localStorage.setItem('errorIncrementButton', JSON.stringify(state.errorIncrementButton))
        localStorage.setItem('errorResetButton', JSON.stringify(state.errorResetButton))
        localStorage.setItem('errorSettingButton', JSON.stringify(state.errorSettingButton))
        localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
        localStorage.setItem('startValue', JSON.stringify(state.startValue))
        localStorage.setItem('alertSetTitle', JSON.stringify(state.alertSetTitle))
        localStorage.setItem('errorMaxValue', JSON.stringify(state.errorMaxValue))
        localStorage.setItem('errorStartValue', JSON.stringify(state.errorStartValue))
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
