import {SIGN_IN, SIGN_UP} from "./index";

export const signInReducer = (state = { isLoading: false}, action) => {
    switch (action.type) {
        case SIGN_IN.REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case SIGN_IN.SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case SIGN_IN.FAIL:
            return {
                ...state,
            }
        default:
            return state
    }
}

export const signUpReducer = (state = {isLoading: false}, action) => {
    switch (action.type) {
        case SIGN_UP.REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case SIGN_UP.SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case SIGN_UP.FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}