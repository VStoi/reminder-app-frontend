import {SIGN_IN, SIGN_UP} from "./index";
import {UserService} from "../helpers/UserService";
import history from "../services/history";
import StorageService from "../services/StorageService";


export const signInAction = (data) => dispatch => {
    const store = new StorageService();

    dispatch({type: SIGN_IN.REQUEST});

    return new UserService().login(data)
        .then((payload) => {
            const {session, user} = payload.data;
            store.set("SESSION", session)
            store.set("PROFILE", user)
            dispatch({type: SIGN_IN.SUCCESS})
            history.push("/app")
        })
        .catch((err) => {
            dispatch({type: SIGN_IN.FAIL})
        })
};

export const signUpActions = (data) => dispatch => {
    dispatch({type: SIGN_UP.REQUEST});

    return new UserService().signup(data)
        .then(() => {
            dispatch({type: SIGN_UP.SUCCESS})
            history.push("/sign-in")
        })
        .catch((error) => {
            dispatch({type: SIGN_UP.FAIL})
        })
}