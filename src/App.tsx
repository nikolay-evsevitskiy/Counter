import React, {useEffect} from 'react';
import {Counter} from './Counter';
import {CounterSetting} from "./CounterSetting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    addValueAC,
    changeMaxValueAC,
    changeStartValueAC, getValueFromLocalStorageTC, putValueFromLocalStorageTC,
    resetValueAC,
    setButtonClickAC,
} from "./state/counterReducer";

function App() {

    const dispatch = useDispatch()
    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const errorIncrement = useSelector<AppRootStateType, boolean>(state => state.counter.errorIncrementButton)
    const errorResetButton = useSelector<AppRootStateType, boolean>(state => state.counter.errorResetButton)
    const alertSetTitle = useSelector<AppRootStateType, boolean>(state => state.counter.alertSetTitle)
    const errorMaxValue = useSelector<AppRootStateType, boolean>(state => state.counter.errorMaxValue)
    const errorStartValue = useSelector<AppRootStateType, boolean>(state => state.counter.errorStartValue)
    const errorValue = useSelector<AppRootStateType, boolean>(state => state.counter.errorValue)
    const errorSettingButton = useSelector<AppRootStateType, boolean>(state => state.counter.errorSettingButton)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)

    useEffect(() => {
        dispatch(getValueFromLocalStorageTC())
    }, [])

    const setButton = () => {
        dispatch(setButtonClickAC())
        dispatch(putValueFromLocalStorageTC())
    }
    const addValue = () => {
        dispatch(addValueAC())
    }
    const resetValue = () => {
        dispatch(resetValueAC())
    }
    const changeMaxValue = (newValue: number) => {
        dispatch(changeMaxValueAC(newValue))
    }
    const changeStartValue = (newValue: number) => {
        dispatch(changeStartValueAC(newValue))
    }

    return (
        <div>
            <Counter
                value={value}
                addValue={addValue}
                resetValue={resetValue}
                errorIncrement={errorIncrement}
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
