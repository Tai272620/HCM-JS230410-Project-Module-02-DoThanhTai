import React, { useEffect, useState } from 'react';
import "./Order.scss";
import { useDispatch, useSelector } from 'react-redux';
import { userLoginActions } from '../../stores/slices/userLogin.slice';
import { convertToVND } from '@mieuteacher/meomeojs';
import "./Order.scss";

export default function Order() {
    const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null)

    const dispatch = useDispatch();

    const userLoginStore = useSelector(store => store.userLoginStore);

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")));
    }, [])

    // console.log(userLoginStore.userInfor);

    const receipts = useSelector(store => store.userLoginStore.userInfor?.receipts || []);

    return (
        <div>
            {isLogin ? (receipts?.map((receipt, index) =>
                <section className="h-100 gradient-custom" id='order'>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-10 col-xl-8">
                                <div className="card" style={{ borderRadius: 10 }}>
                                    <div className="card-header px-4 py-5">
                                        <h5 className="text-muted mb-0">
                                            Thanks for your Order,{" "}
                                            <span style={{ color: "#a8729a" }}>{userLoginStore.userInfor?.userName}</span>!
                                        </h5>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <p className="lead fw-normal mb-0" style={{ color: "#a8729a" }}>
                                                Receipt
                                            </p>
                                            <p className="small text-muted mb-0">
                                                Receipt No : {index + 1}
                                            </p>
                                        </div>
                                        {receipt?.map((food) =>
                                            <div className="card shadow-0 border mb-4">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img
                                                                src={food.url}
                                                                className="img-fluid"
                                                                alt="Phone"
                                                            />
                                                        </div>
                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                            <p className="text-muted mb-0">{food.name}</p>
                                                        </div>

                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                            <p className="text-muted mb-0 small">Quantity: {food.quantity}</p>
                                                        </div>
                                                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                                            <p className="text-muted mb-0 small">{convertToVND(food.price)}</p>
                                                        </div>
                                                    </div>
                                                    <hr
                                                        className="mb-4"
                                                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                                    />
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-md-2">
                                                            <p className="text-muted mb-0 small">Track Order</p>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <div
                                                                className="progress"
                                                                style={{ height: 6, borderRadius: 16 }}
                                                            >
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progressbar"
                                                                    style={{
                                                                        width: "20%",
                                                                        borderRadius: 16,
                                                                        backgroundColor: "#a8729a"
                                                                    }}
                                                                    aria-valuenow={20}
                                                                    aria-valuemin={0}
                                                                    aria-valuemax={100}
                                                                />
                                                            </div>
                                                            <div className="d-flex justify-content-around mb-1">
                                                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                    Out for delivary
                                                                </p>
                                                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                    Delivered
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="d-flex justify-content-between pt-2">
                                            <p className="fw-bold mb-0">Order Details</p>
                                            <p className="text-muted mb-0">
                                                <span className="fw-bold me-4">Total</span> {convertToVND(receipt.reduce((total, food) => {
                                                    return total + food.quantity * food.price
                                                }, 0))}
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted mb-0">Invoice Date : </p>
                                        </div>
                                    </div>
                                    <div
                                        className="card-footer border-0 px-4 py-5"
                                        style={{
                                            backgroundColor: "#a8729a",
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10
                                        }}
                                    >
                                        <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                                            Total paid: <span className="h2 mb-0 ms-2">{convertToVND(receipt.reduce((total, food) => {
                                                return total + food.quantity * food.price
                                            }, 0))}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )) : (<div><h1>No Orders</h1></div>)}
        </div>
    )
}
