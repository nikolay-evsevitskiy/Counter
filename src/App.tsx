import React, {useState} from 'react';
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

    const setButton = () => {
        return setState({
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
                errorSetting: false,
                startValue: startValue,
                maxValue: maxValue,
                incorrectValue: false,
                alertSetTitle: true
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
