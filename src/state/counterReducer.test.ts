import {
    addValueAC,
    changeMaxValueAC, changeStartValueAC,
    counterReducer,
    CounterStateType,
    resetValueAC,
    setButtonClickAC
} from "./counterReducer";


let startState: CounterStateType

beforeEach(() => {
    startState = {
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
    }
})

test('button of set should be correct change data', () => {
    const action = setButtonClickAC()
    const endState = counterReducer(startState, action)

    expect(endState).toEqual({
        value: 0,
        maxValue: 0,
        startValue: 0,
        errorValue: false,
        errorIncrementButton: false,
        errorResetButton: true,
        errorSettingButton: true,
        alertSetTitle: false,
        errorMaxValue: false,
        errorStartValue: false
    })

})

test('button of increment should be work correct', () => {
    const action = addValueAC()
    const endState = counterReducer(startState, action)

    expect(endState.errorIncrementButton).toBe(true)
    expect(endState.errorValue).toBe(true)
    expect(endState.errorResetButton).toBe(false)
    expect(endState.value).toBe(1)

})

test('button of reset should be to correct work', () => {
    const action = resetValueAC()
    const startState: CounterStateType = {
        value: 5,
        maxValue: 8,
        startValue: 3,
        errorValue: true,
        errorIncrementButton: true,
        errorResetButton: false,
        errorSettingButton: false,
        alertSetTitle: false,
        errorMaxValue: false,
        errorStartValue: false
    }
    const endState = counterReducer(startState, action)

    expect(endState.value).toBe(3)
    expect(endState.errorIncrementButton).toBe(false)
    expect(endState.errorResetButton).toBe(true)
    expect(endState.errorValue).toBe(false)
})

test('callback function of max value input should be work correct', () => {
    const newValue = 3
    const action = changeMaxValueAC(newValue)
    const startState: CounterStateType = {
        value: 0,
        maxValue: 0,
        startValue: 4,
        errorValue: false,
        errorIncrementButton: true,
        errorResetButton: false,
        errorSettingButton: false,
        alertSetTitle: true,
        errorMaxValue: false,
        errorStartValue: false
    }
    const endState = counterReducer(startState, action)
    expect(endState.errorResetButton).toBe(true)
    expect(endState.errorSettingButton).toBe(true)
    expect(endState.errorMaxValue).toBe(true)
    expect(endState.alertSetTitle).toBe(false)
    expect(endState.maxValue).toBe(3)
})

test('callback function of start value input should be work correct', () => {
    const newValue = 8
    const action = changeStartValueAC(newValue)
    const startState: CounterStateType = {
        value: 0,
        maxValue: 10,
        startValue: 0,
        errorValue: false,
        errorIncrementButton: true,
        errorResetButton: false,
        errorSettingButton: false,
        alertSetTitle: true,
        errorMaxValue: false,
        errorStartValue: false
    }
    const endState = counterReducer(startState, action)
    expect(endState.errorResetButton).toBe(true)
    expect(endState.errorIncrementButton).toBe(true)
    expect(endState.errorSettingButton).toBe(false)
    expect(endState.errorStartValue).toBe(false)
    expect(endState.alertSetTitle).toBe(true)
    expect(endState.errorValue).toBe(false)
    expect(endState.startValue).toBe(8)
})