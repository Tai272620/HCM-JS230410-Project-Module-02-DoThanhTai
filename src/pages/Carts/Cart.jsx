import React, { useEffect, useState } from 'react';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import { useDispatch, useSelector } from 'react-redux';
import "./Cart.scss";
import { productActions } from '../../stores/slices/product.slice';
import CartItem from './components/CartItem';
import { convertToUSD } from '@mieuteacher/meomeojs';

export default function Cart() {
    const [subTotal, setSubTotal] = useState(0)

    const userLoginStore = useSelector(store => store.userLoginStore)
    const productStore = useSelector(store => store.productStore);
    const [cartData, setCartData] = useState(userLoginStore.userInfor?.carts || []);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
        dispatch(productActions.findAllProducts())
    }, [])

    useEffect(() => {
        if (userLoginStore.userInfor != null && productStore.listProducts.length > 0) {

            let carts = [...userLoginStore.userInfor.carts]
            let listProducts = productStore.listProducts

            for (let i = 0; i < carts.length; i++) {
                for (let j = 0; j < listProducts.length; j++) {
                    if (carts[i].productId == listProducts[j].id) {
                        carts[i] = Object.assign({}, carts[i], { url: listProducts[j].url });
                        carts[i] = Object.assign({}, carts[i], { price: listProducts[j].price });
                        carts[i] = Object.assign({}, carts[i], { name: listProducts[j].name });
                    }
                }

                setCartData(carts)
            }

            // console.log(cartData)

        }
    }, [userLoginStore.userInfor])

    useEffect(() => {
        const newSubTotal = cartData.reduce((total, food) => {
            const foodSubTotal = food.price * food.quantity;
            return total + foodSubTotal;
        }, 0);
        setSubTotal(newSubTotal);
    }, [cartData]);


    return (
        <section className="shopping-cart-container">

            <div className="products-container">

                <h3 className="title">your products</h3>

                <div className="box-container">
                    {cartData?.map((food) =>
                        <CartItem food={food} setSubTotal={newSubTotal => setSubTotal(newSubTotal)} cartData={cartData} setCartData={setCartData}/>
                    )}
                </div>

            </div>

            <div className="cart-total">
                <h3 className="title"> cart total </h3>
                <div className="box">
                    <h3 className="subtotal"> subtotal : <span>{convertToUSD(subTotal)}</span> </h3>
                    <a href="#" className="btn">proceed to checkout</a>
                </div>
            </div>
        </section>
    )
}
