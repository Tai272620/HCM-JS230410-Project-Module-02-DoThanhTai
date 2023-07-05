import React, { useEffect, useState } from 'react'
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginActions } from '../../../stores/slices/userLogin.slice';
import { cartsActions } from '../../../stores/slices/cart.slice';

export default function CartItem({ food, setSubTotal, cartData, setCartData }) {
    const [quantity, setQuantity] = useState(food.quantity);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
    }, [])

    function handleDeleteProduct(productId) {
        dispatch(cartsActions.deleteItemInCart(productId));
    }

    return (
        <div className="box" key={randomId()}>
            <i className="fas fa-times" onClick={() => handleDeleteProduct(food.productId)}></i>
            <img src={food.url} alt="" />
            <div className="content">
                <h3>{food.name}</h3>
                <span> quantity : </span>
                <div className='quantity-container'>
                    <div>
                        <button onClick={() => {
                            if (quantity > 1) {
                                {
                                    setQuantity(quantity - 1)
                                    dispatch(cartsActions.updateItemInCart(
                                        {
                                            ...food,
                                            quantity: quantity - 1
                                        }
                                    ))
                                }
                            }
                        }}>
                            <span className="material-symbols-outlined">
                                remove
                            </span>
                        </button>

                        <span className='quantity' style={{ fontSize: "18px" }}>{quantity}</span>

                        <button onClick={() => {
                            {
                                setQuantity(quantity + 1)
                                dispatch(cartsActions.updateItemInCart(
                                    {
                                        ...food,
                                        quantity: quantity + 1
                                    }
                                ))
                            }
                        }}>
                            <span className="material-symbols-outlined">
                                add
                            </span>
                        </button>
                    </div>
                </div>
                <br />
                <span> price : </span>
                <span className="price"> {convertToUSD(food.price)} </span>
            </div>
        </div>
    )
}
