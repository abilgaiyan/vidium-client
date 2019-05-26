import axiox from 'axios';
import { AUTH_USER, AUTH_ERROR } from "./types";

const SERVICE_URL = 'http://localhost:8080';

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axiox.put(`${SERVICE_URL}/auth/signup`, formProps);
        dispatch(
            {
                type: AUTH_USER,
                payload: response.data.token
            }
        )
        localStorage.setItem('token', response.data.token)
        callback();
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: "Email in use.."
        })
    }
}

export const signin = (formProps, callback) => async dispatch => {
    try {
        const response = await axiox.post(`${SERVICE_URL}/auth/signin`, formProps);
        console.log(response);
        dispatch(
            {
                type: AUTH_USER,
                payload: response.data.token
            }
        )
        localStorage.setItem('token', response.data.token)
        callback();
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERROR,
            payload: "Invalid Credentials.."
        })
    }
}

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
}