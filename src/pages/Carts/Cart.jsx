import React, { useEffect, useState } from 'react';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import { useDispatch, useSelector } from 'react-redux';
import "./Cart.scss";
import CartItem from './components/CartItem';
import { convertToVND } from '@mieuteacher/meomeojs';

export default function Cart() {
    

    const userLoginStore = useSelector(store => store.userLoginStore)
    const [cartData, setCartData] = useState(userLoginStore.userInfor?.carts || []);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
    }, [])

    useEffect(() => {
        if (userLoginStore.userInfor != null) {

            let carts = [...userLoginStore.userInfor.carts]
            setCartData(carts)
        }
    }, [userLoginStore.userInfor])

    const foodSubTotal = cartData.reduce((total, food) => {
        return total + food.price * food.quantity;
    }, 0)

    const [subTotal, setSubTotal] = useState(foodSubTotal)


    return (
        <section className="shopping-cart-container">

            <div className="products-container">

                <h3 className="title">your products</h3>

                <div className="box-container">
                    {cartData?.map((food) =>
                        <CartItem key={food.productId} food={food} setSubTotal={newSubTotal => setSubTotal(newSubTotal)} cartData={cartData} setCartData={setCartData}/>
                    )}
                </div>

            </div>

            <div className="cart-total">
                <h3 className="title"> cart total </h3>
                <div className="box">
                    <h3 className="subtotal"> subtotal : <span>{convertToVND(subTotal)}</span> </h3>
                    <a href="#" className="btn">proceed to checkout</a>
                </div>
            </div>
        </section>
    )
}
