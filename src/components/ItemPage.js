import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const useStyles = makeStyles({
    root: {
        marginTop: '200px',
    }
});

const ItemPage = props => {
    const classes = useStyles();
    const params = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        console.log('Fetching Item');
        console.log(params.itemID);
        axiosWithAuth()
            .get(`https://ptct-african-marketplace-3.herokuapp.com/api/items/3`)
            .then(res => {
                console.log('Successfully fetched item')
                setItem(res.data.item);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className={classes.root}>
            <h2> {item.itemName} </h2>
        </div>
    )
}

export default ItemPage;
