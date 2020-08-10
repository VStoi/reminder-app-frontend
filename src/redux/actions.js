import { SIGN_IN } from "./index";
import {UserService} from "../helpers/UserService";


export const signInAction = (data) => dispatch => {
    dispatch({type: SIGN_IN.REQUEST});

    return new UserService().login(data)
        .then((payload) => {
            dispatch({ type: SIGN_IN.SUCCESS, payload})
        })
        .catch( (err) => {
            dispatch({type: SIGN_IN.FAIL, err})
        })
}