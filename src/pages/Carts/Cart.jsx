import React, { useEffect } from 'react';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import { useDispatch, useSelector } from 'react-redux';

import "./Cart.scss";
import { productActions } from '../../stores/slices/product.slice';

export default function Cart() {

    const dispatch = useDispatch();

    const userLoginStore = useSelector(store => store.userLoginStore)

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
    }, [])

    // console.log(userLoginStore.userInfor.carts);

    let carts = userLoginStore.userInfor.carts;
    // console.log(carts)

    // carts = carts.map(() => {
    //     dispatch(productActions.searchProductById(1))
    // },[])

    // console.log(carts)

    useEffect(() => {
        
    })


    return (
        <section className="shopping-cart-container">

            <div className="products-container">

                <h3 className="title">your products</h3>

                <div className="box-container">

                    {/* {carts?.map((food) =>
                        <div className="box">
                            <i className="fas fa-times"></i>
                            <img src={food.url} alt="" />
                            <div className="content">
                                <h3>delicious food</h3>
                                <span> quantity : </span>
                                <input type="number" name="" value="1" id="" />
                                <br />
                                <span> price : </span>
                                <span className="price"> $40.00 </span>
                            </div>
                        </div>
                    )} */}

                    {/* <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/menu-1.png" alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/menu-2.png" alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/menu-3.png" alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/menu-4.png" alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/menu-5.png" alt="" />
                        <div className="content">
                            <h3>delicious food</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div> */}

                </div>

            </div>

            <div className="cart-total">

                <h3 className="title"> cart total </h3>

                <div className="box">

                    <h3 className="subtotal"> subtotal : <span>$200</span> </h3>
                    <h3 className="total"> total : <span>$200</span> </h3>

                    <a href="#" className="btn">proceed to checkout</a>

                </div>

            </div>

        </section>
    )
}
