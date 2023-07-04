import React, { useEffect, useState } from 'react';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import { useDispatch, useSelector } from 'react-redux';
import "./Cart.scss";
import { productActions } from '../../stores/slices/product.slice';
import CartItem from './components/CartItem';
import { convertToUSD } from '@mieuteacher/meomeojs';

export default function Cart() {
    const dispatch = useDispatch();

    const userLoginStore = useSelector(store => store.userLoginStore)

    const productStore = useSelector(store => store.productStore);

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
        dispatch(productActions.findAllProducts())
    }, [])

    let carts = [...userLoginStore.userInfor.carts];

    let listProducts = productStore.listProducts

    for (let i = 0; i < carts.length; i++) {
        for (let j = 0; j < listProducts.length; j++) {
            if (carts[i].productId === listProducts[j].id) {
                carts[i] = Object.assign({}, carts[i], { url: listProducts[j].url });
                carts[i] = Object.assign({}, carts[i], { price: listProducts[j].price });
                carts[i] = Object.assign({}, carts[i], { name: listProducts[j].name });
            }
        }
    }

    const calculateCartsTotalPrice = () => {
        return carts?.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0);
    }

    const [subTotal, setSubTotal] = useState(0)
    
    useEffect(() => {
        setSubTotal(calculateCartsTotalPrice())
    }, [])

    return (
        <section className="shopping-cart-container">

            <div className="products-container">

                <h3 className="title">your products</h3>

                <div className="box-container">
                    {carts?.map((food) =>
                        <CartItem food={food} setSubTotal={setSubTotal}/>
                    )}
                </div>

            </div>

            <div className="cart-total">

                <h3 className="title"> cart total </h3>

                <div className="box">

                    <h3 className="subtotal"> subtotal : <span>{subTotal}</span> </h3>
                    {/* <h3 className="total"> total : <span>$200</span> </h3> */}

                    <a href="#" className="btn">proceed to checkout</a>

                </div>

            </div>

        </section>
    )
}
