import React, { useEffect, useState } from 'react'
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginActions } from '../../../stores/slices/userLogin.slice';

export default function CartItem({ food, setSubTotal, cartData, setCartData }) {
    const [quantity, setQuantity] = useState(food.quantity)

    const dispatch = useDispatch();

    const userLoginStore = useSelector(store => store.userLoginStore);

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
    }, [])

    function handleDeleteProduct(productId) {
        console.log(productId);

        let carts = userLoginStore.userInfor.carts
        // console.log(carts);

        let updatedCart = carts.filter((product) => product.productId !== productId)

        // console.log(updatedCart);

        dispatch(userLoginActions.updateCart(
            {
                userId: userLoginStore.userInfor.id,
                carts: {
                    carts: updatedCart
                }
            }
        ))
    }

    return (
        <div className="box" key={randomId()}>
            <i className="fas fa-times" onClick={() => handleDeleteProduct(food.productId)}></i>
            <img src={food.url} alt="" />
            <div className="content">
                <h3>{food.name}</h3>
                <span> quantity : </span>
                <input type="number" name="" defaultValue={quantity} min={1}
                    onChange={e => {
                        const newQuantity = parseInt(e.target.value, 10);
                        setQuantity(newQuantity);

                        // Gọi hàm callback để cập nhật quantity trong cartData
                        const updatedCartData = cartData.map(item => {
                            if (item.id === food.id) {
                                return { ...item, quantity: newQuantity };
                            }
                            return item;
                        });
                        setCartData(updatedCartData);
                    }}
                />
                <br />
                <span> price : </span>
                <span className="price"> {convertToUSD(food.price * quantity)} </span>
            </div>
        </div>
    )
}
