import React from 'react';



export default function Product(props) {
    
    return ( 
        <div>
            {props.imgURL}
            {props.name}
            {props.price}
        </div>
    )
}