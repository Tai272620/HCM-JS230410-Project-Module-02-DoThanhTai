import React from 'react';
import "./Cart.scss";

export default function Cart() {
    return (
        <section className="shopping-cart-container">

            <div className="products-container">

                <h3 className="title">your products</h3>

                <div className="box-container">

                    <div className="box">
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
                    </div>

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
