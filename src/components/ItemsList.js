import React from 'react';
import { connect } from "react-redux"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';

//Styling
const useStyles = makeStyles({

    background: {
        zIndex: '-1',
        position:'fixed',
        boxSizing: 'border-box',
        backgroundImage: 
            'linear-gradient(to top, white 20%, transparent 60%), url("https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        margin: '0px auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },
    outerWrap: {
        margin: '0px auto',
        marginTop: '45rem',
        fontSize: '24px',
        position: 'absolute',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignSelf: 'center',
        justifySelf: 'center',
        width: '75rem',
        height: 'content',
        backgroundColor: 'white',
        opacity: '0.97'
    },
    innerWrap: {
        paddingLeft: '4rem',
        height: '33%',
    }
})

const ItemsList = props => {

    //state
    const [items, setItems] = useState([]);
    const classes = useStyles();

    //Fetch Data
    useEffect(() => {
        const getData = () => {
            axios
                .get('https://ptct-african-marketplace-3.herokuapp.com/api/items')
                    .then(res => {
                        console.log(res.data)
                        setItems(res.data)
                    })
                    .catch(error => {
                        console.log('Error with API', error)
                    })
        }
        getData()
    },[])
    
    return (
        <div className={classes.background}>
            <div className={classes.outerWrap}>
                {items.map(data => 
                        <div className={classes.innerWrap} key={data.id}>
                            <h3 className='itemTitle'>{data.itemName}</h3>
                            <p>{data.itemDescription}</p>
                            <p>{data.itemPrice}</p>
                            <p>{data.itemLocation}</p>
                        </div>
                    )}
            </div>
        </div>
    )
};

export default ItemsList