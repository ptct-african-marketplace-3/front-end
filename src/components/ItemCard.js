import { Card, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles({
    itemCard: {
        margin: '0px auto',
        marginBottom: '10px',
        padding: '20px',
        width: '350px',
        textAlign: 'center',
    },
    itemTitle: {
        margin: '2px auto',
        fontSize: '24px'
    },
    hr: {
        color: 'grey',
    },
    itemDetails: {
        fontSize: '18px',
        textAlign: 'left',
        fontFamily: 'Roboto'
    }
});

const ItemCard = props => {
    const [item, setItem] = useState(props.item);
    const classes = useStyles();

    return (
        <Card className={classes.itemCard}>
            <h3 className={classes.itemTitle}> {item.itemName} </h3>
            <hr className={classes.hr}/>
            <div className={classes.itemDetails}> 
                <p> {item.itemDescription} </p>
                <p> {item.itemLocation} </p>
                <p> ${item.itemPrice} </p> 
            </div>
        </Card>
    );
}

export default ItemCard;

