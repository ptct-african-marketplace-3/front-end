import { axiosWithAuth } from "../helpers/axiosWithAuth";

export const REGISTER_START   = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const attemptRegister = (register, push) => dispatch => {
    dispatch({type: REGISTER_START});

    axiosWithAuth().post('/', register)
        .then(success => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: success.data
            });
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAILURE,
                payload: err
            });
        })
}

