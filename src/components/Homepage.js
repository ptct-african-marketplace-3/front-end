import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { getItems } from '../actions/itemActions'; 
import ItemCard from './ItemCard';

const useStyles = makeStyles({
    backgroundImage: {
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
        height: '800px',
        filter: ''
    },
    itemsCard: {
        margin: '0px auto',
        marginBottom: '1000px',
        fontSize: '32px',
        position: 'absolute',
        top: '400px',
        left: '100px',
        width: '75rem',
        height: 'content',
        paddingBottom: '10px',
        backgroundColor: 'white',
        opacity: '0.97'
    },
    itemsCardTitle: {
        textAlign: 'left',
        margin: '15px auto',
        marginLeft: '1em',
    },
    items: {
        marginTop: '10px',
        width: '75rem',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
    }
});

const Homepage = props => {
    const classes = useStyles();

    const [items, setItems] = useState(props.items);

    useEffect(() => {
        props.getItems();
    }, []);

    useEffect(() => {
        setItems([...props.items])
    }, [props.items])

    return (
        <div>
            <div className={classes.backgroundImage}></div>
            <Card className={classes.itemsCard}>
                <h3 className={classes.itemsCardTitle}> a few items from our sellers... </h3>
                <div className={classes.items}> 
                    {!props.loading ? items.map(item => {
                        console.log(item.itemName);
                        console.log(items);
                        return <ItemCard item={item}/>
                    }) : <h2> Loading... </h2>}
                </div>
            </Card>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        items  : state.itemReducer.items,
        loading: state.itemReducer.loading,
        error  : state.itemReducer.error
    }
}
const mapDispatchToProps = { getItems };

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
