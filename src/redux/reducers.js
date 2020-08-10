import { SIGN_IN } from "./index";

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
                data: action.payload.data
            }
        case SIGN_IN.FAIL:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}