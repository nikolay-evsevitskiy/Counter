export type CounterStateType = {
    value: number
    maxValue: number
    startValue: number
    errorValue: boolean
    errorIncrementButton: boolean
    errorResetButton: boolean
    errorSettingButton: boolean
    alertSetTitle: boolean
    errorMaxValue: boolean
    errorStartValue: boolean
}
type SetButtonClickType = ReturnType<typeof setButtonClickAC>
type AddValueType = ReturnType<typeof addValueAC>
type ResetValueType = ReturnType<typeof resetValueAC>
type ChangeMaxValueType = ReturnType<typeof changeMaxValueAC>
type ChangeStartValueType = ReturnType<typeof changeStartValueAC>
type ActionsType = SetButtonClickType
    | AddValueType
    | ResetValueType
    | ChangeMaxValueType
    | ChangeStartValueType
const initialState: CounterStateType = {
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

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case 'CLICK-BUTTON-OF-SET': {
            return {
                ...state,
                errorIncrementButton: false,
                errorSettingButton: true,
                errorMaxValue: false,
                errorStartValue: false,
                alertSetTitle: false,
                value: state.startValue
            }
        }
        case 'ADD-VALUE': {
            const stateCopy = {...state}
            if (stateCopy.value + 1 >= stateCopy.maxValue) {
                stateCopy.errorIncrementButton = true
                stateCopy.errorValue = true
                stateCopy.errorResetButton = false
                stateCopy.value++
            } else {
                stateCopy.errorIncrementButton = false
                stateCopy.errorResetButton = false
                stateCopy.value++
            }
            return stateCopy
        }
        case 'RESET-VALUE': {
            return {
                ...state,
                errorIncrementButton: false,
                errorResetButton: true,
                errorValue: false,
                value: state.startValue
            }
        }
        case 'CHANGE-MAX-VALUE': {
            const copyState = {...state}
            if (action.newValue <= copyState.startValue || action.newValue <= 0) {
                copyState.errorResetButton = true
                copyState.errorSettingButton = true
                copyState.errorMaxValue = true
                copyState.alertSetTitle = false
            } else {
                copyState.errorResetButton = true
                copyState.errorIncrementButton = true
                copyState.errorSettingButton = false
                copyState.errorMaxValue = false
                copyState.alertSetTitle = true
                copyState.errorValue = false
            }
            copyState.maxValue = action.newValue
            return copyState
        }
        case 'CHANGE-START-VALUE': {
            const copyState = {...state}
            if (action.newValue < 0 || action.newValue >= copyState.maxValue) {
                copyState.errorResetButton = true
                copyState.errorSettingButton = true
                copyState.errorStartValue = true
                copyState.alertSetTitle = false
            } else {
                copyState.errorResetButton = true
                copyState.errorIncrementButton = true
                copyState.errorSettingButton = false
                copyState.alertSetTitle = true
                copyState.errorStartValue = false
                copyState.errorValue = false
            }
            copyState.startValue = action.newValue
            return copyState
        }

        default:
            return state
    }
}


export const setButtonClickAC = () => {
    return {type: 'CLICK-BUTTON-OF-SET'} as const
}
export const addValueAC = () => {
    return {type: 'ADD-VALUE'} as const
}
export const resetValueAC = () => {
    return {type: 'RESET-VALUE'} as const
}
export const changeMaxValueAC = (newValue: number) => {
    return {type: 'CHANGE-MAX-VALUE', newValue} as const
}
export const changeStartValueAC = (newValue: number) => {
    return {type: 'CHANGE-START-VALUE', newValue} as const
}



