import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from "./actionTypes";

const SERVICE_URL = 'http://localhost:8080'

export const signup = (formValues, callback) => async dispatch => {
    try {
        const response = await axios.put(`${SERVICE_URL}/auth/signup`, formValues);
        dispatch(
            {
                type: AUTH_USER,
                payload: response.data
            }
        )
        // localStorage.setItem('token', response.data.token)
        callback();
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: "Email in use.."
        })
    }
}

export const signin = (formValues, callback) => async dispatch => {
    try {
        const response = await axios.post(`${SERVICE_URL}/auth/login`, formValues);
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

export const uploadFile = (file, history) => async dispatch => {
    console.log(file)
    const uploadConfig = await axios.get(`${SERVICE_URL}/upload/upload`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    console.log(uploadConfig);
    const upload = await axios.put(uploadConfig.data.url, file, {
        headers: {
            'Content-Type': file.type
        }
    });

    // const res = await axios.post('/api/blogs', {
    //     videoUrl: uploadConfig.data.key
    // });

    // history.push('/blogs');
    // dispatch({ type: FETCH_BLOG, payload: res.data });
};