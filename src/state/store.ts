import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
export const UseAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector