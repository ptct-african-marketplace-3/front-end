import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ItemsList() {


    //state
    const [items, setItems] = useState([])

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
        <div>
            {items.map(data => 
                <div className='outerWrap'>
                    <div className='innerWrap'>
                        <h2>{data.itemName}</h2>
                        <p>{data.itemDescription}</p>
                        <p>{data.itemPrice}</p>
                        <p>{data.itemLocation}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemsList