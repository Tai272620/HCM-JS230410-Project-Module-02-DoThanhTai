import React, { useEffect, useState } from 'react';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import { useDispatch, useSelector } from 'react-redux';
import "./Cart.scss";
import CartItem from './components/CartItem';
import CartItemLocal from './components/CartItemLocal';
import { convertToVND } from '@mieuteacher/meomeojs';
import { Link } from 'react-router-dom';

export default function Cart() {

    const [cartsLocal, setCartsLocal] = useState(() => JSON.parse(localStorage.getItem("carts")));

    const cartsLocalStore = useSelector(store => store.cartsLocalStore);

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

    const foodSubTotalLocal = cartsLocalStore.reduce((total, food) => {
        return total + food.price * food.quantity;
    }, 0)

    return (
        <section className="shopping-cart-container">

            <div className="products-container">

                <h3 className="title">your products</h3>

                <div className="box-container">
                    {cartsLocal ? (cartsLocalStore?.map((food) => <CartItemLocal key={food.productId} food={food} setSubTotal={newSubTotal => setSubTotal(newSubTotal)} cartData={cartData} setCartData={setCartData} />)) :

                        (cartData?.map((food) =>
                            <CartItem key={food.productId} food={food} setSubTotal={newSubTotal => setSubTotal(newSubTotal)} cartData={cartData} setCartData={setCartData} />
                        ))}
                </div>
            </div>

            <div className="cart-total">
                <div className="box">
                    <h3 className="subtotal"> subtotal : <span>{cartsLocal ? convertToVND(foodSubTotalLocal) : convertToVND(subTotal)}</span> </h3>
                    {cartsLocal ? (<Link to="/login" className="btn">proceed to checkout</Link>) : (<Link to="/checkout" className="btn">proceed to checkout</Link>)}
                </div>
            </div>
        </section>
    )
}
