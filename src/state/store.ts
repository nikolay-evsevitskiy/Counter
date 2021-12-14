import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";


const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
export const UseAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

store.subscribe( () => {
    saveState(store.getState())
})