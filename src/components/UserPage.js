import React, { useEffect, useState } from 'react';
import { getOwnerItems } from '../actions/ownerActions';
import { connect } from 'react-redux';
import { useHistory, useParams} from 'react-router-dom';
import { Button, makeStyles, Box, Typography } from '@material-ui/core';
import ItemCard from './ItemCard';

const useStyles = makeStyles({
    root: {
        margin: '0px auto',
        marginTop: '150px',
        fontSize: '32px',
        // position: 'absolute',
        // top: '150px',
        // left: '100px',
        width: '50vw',
        height: 'content',
        paddingBottom: '10px',
        backgroundColor: 'white',
        opacity: '0.85',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
    createItemButton: {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: '900' 
    },
    box: {
        margin: '0px auto',
        marginLeft: '0px',
        padding: '0px auto',
        backgroundColor: 'white',
        border: '1px solid lightgrey',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly'
    }
});

const UserPage = props => {
    const classes = useStyles();
    const history = useHistory();

    const { ownerID } = useParams();
    const [items, setItems] = useState(props.ownerItems);

    useEffect(() => {
        props.getOwnerItems(localStorage.getItem('userId'));
    }, []);

    useEffect(() => {
        console.log('Setting Owner Items');
        console.log(props.ownerItems);
        setItems([...props.ownerItems]);
        console.log(items);
    }, [props.ownerItems])


    return(
        <div>
            <div className={classes.root}>
                <div style={{width: '100%', margin: '5px auto', display: 'flex', justifyContent: 'space-between'}}> 
                    <Typography variant='h4'> Your items </Typography>
                    <Button className={classes.createItemButton} onClick={() => history.push('/createListing')}> CREATE LISTING </Button>
                </div>
                <Box className={classes.box}>
                    {
                        items.map(item => {
                            return <ItemCard key={item.itemId} item={item}/>
                        })
                    }
                </Box>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        ownerItems: state.ownerReducer.ownerItems
    }
}
const mapDispatchToProps = { getOwnerItems }

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);