import { axiosWithAuth } from "../helpers/axiosWithAuth";

export const GET_ITEMS_START   = 'GET_ITEMS_START';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';  

export const getItems = (push) => dispatch => {
    dispatch({type: GET_ITEMS_START});

    axiosWithAuth().get('/')
        .then(success => {
            dispatch({
                type   : GET_ITEMS_SUCCESS,
                payload: success.data
            });
        })
        .catch(err => {
            dispatch({
                type   : GET_ITEMS_FAILURE,
                payload: err
            });
        });
}
