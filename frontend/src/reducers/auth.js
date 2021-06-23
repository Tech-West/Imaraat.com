import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/actionTypes";

const initialState = {
    token: null,
    isAuthenticated: null,
    isLoading: true,
    userInfo: null
}

const auth = (auth = initialState, action) =>{
    const {type, payload} = action;
    if(type === REGISTER_SUCCESS){
        return {
            ...auth,
            token: payload.token,
            isAuthenticated: true,
            isLoading: false,
            userInfo: payload.user,
        }
    } else if(type === REGISTER_FAIL){
        return {
            token: null,
            isAuthenticated: false,
            isLoading: false,
            userInfo: null,
        }
    }
    return auth;
}

export default auth;