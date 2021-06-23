import { REGISTER_SUCCESS, REGISTER_FAIL } from "./actionTypes";
import axios from "axios";
import setGlobalAuthToken from "../utils/setToken";

export const register = (username, email, password)=> async (dispatch) => {
    const config = {
        header: {
          "Content-Type": "application/json",
        },
    };

    const body = {
        username, 
        email, 
        password,
    };

    try{
        const res = axios.post('/api/register', body, config);
        setGlobalAuthToken(res.data.token);
        console.log(res.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });

    } catch(err){
        dispatch({
            type: REGISTER_FAIL,
        });
    }
} 