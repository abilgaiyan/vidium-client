import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from "./types";

const SERVICE_URL = 'http://localhost:8080';

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.put(`${SERVICE_URL}/auth/signup`, formProps);
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
        const response = await axios.post(`${SERVICE_URL}/auth/signin`, formProps);
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

export const uploadFile = (file, history) => async dispatch => {
    // console.log(file)
    // const uploadConfig = await axios.get(`${SERVICE_URL}/upload/upload`, {
    //     headers: {
    //         'Authorization': `Bearer ${localStorage.getItem('token')}`
    //     }
    // });

    // console.log("uploadConfig-->", uploadConfig);
    // const upload = await axios.put(uploadConfig.data.url, file, {
    //     headers: {
    //         'Content-Type': file.type
    //     }
    // });

    // console.log("upload-->", upload)
    const values = {
        title: "My title",
        videoUrl: "uploadConfig.data.url",
        description: "My description",
        content: "My content",
        videoFilename: "file.name",
        videoFilesize: "file.size",
        status: "My Status"
    }
    console.log(values)
    const res = await axios.post(`${SERVICE_URL}/upload/video`, values);

    // console.log("Result upload data-->", res.data)


    // history.push('/blogs');
    // dispatch({ type: FETCH_BLOG, payload: res.data });
};