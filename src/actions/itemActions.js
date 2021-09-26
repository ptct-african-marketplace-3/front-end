import { axiosWithAuth } from "../helpers/axiosWithAuth";

export const GET_ITEMS_START   = 'GET_ITEMS_START';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
export const CLEAR_ITEMS       = 'CLEAR_ITEMS';

export const getItems = () => dispatch => {
    dispatch({type: GET_ITEMS_START});
    console.log('getting items');

    axiosWithAuth().get('https://ptct-african-marketplace-3.herokuapp.com/api/items')
        .then(success => {
            console.log(success);
            console.log(success.data);
            dispatch({
                type   : GET_ITEMS_SUCCESS,
                payload: success.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type   : GET_ITEMS_FAILURE,
                payload: err
            });
        });
}

export const clearItems = () => dispatch => {
    dispatch({type: CLEAR_ITEMS});
}