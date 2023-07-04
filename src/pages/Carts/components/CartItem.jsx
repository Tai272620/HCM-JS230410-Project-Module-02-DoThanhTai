import React, { useState } from 'react'
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';

export default function CartItem({ food, setSubTotal }) {
    const [quantity, setQuantity] = useState(food.quantity)
    return (
        <div className="box" key={randomId()}>
            <i className="fas fa-times"></i>
            <img src={food.url} alt="" />
            <div className="content">
                <h3>{food.name}</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={quantity} min={1} onChange={(e) => setQuantity(e.target.value)}/>
                <br />
                <span> price : </span>
                <span className="price"> {convertToUSD(food.price * quantity)} </span>
            </div>
        </div>
    )
}
