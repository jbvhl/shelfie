import React from 'react';



export default function Product(props) {
    
    return ( 
        <div>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
        </div>
    )
}