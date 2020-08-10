import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { signInReducer } from "./reducers";

export const rootReducer = combineReducers({
    signIn: signInReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;