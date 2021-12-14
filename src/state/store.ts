import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    app: counterReducer
})
export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>
export const UseAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector