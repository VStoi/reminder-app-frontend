import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {signInReducer, signUpReducer} from "./reducers";

export const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;