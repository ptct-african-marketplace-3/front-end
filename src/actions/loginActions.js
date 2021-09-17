import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

export const LOGIN_START   = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCESS';
export  const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const attemptLogin = (login, push) => dispatch => {
    dispatch({type: LOGIN_START});

    axiosWithAuth().post('/', login)
        .then(success => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: success.data
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: err
            })
        })
}
