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

        let carts = userLoginStore.userInfor.carts;

        let updatedCart = carts.filter((product) => product.productId !== productId);

        setCartData(updatedCart);

         // Tính tổng giá trị mới
         let foodSubTotal = updatedCart.reduce((total, food) => {
            return total + food.price * food.quantity;
        }, 0);

        // Cập nhật tổng giá trị
        setSubTotal(foodSubTotal);

        dispatch(userLoginActions.updateCart(
            {
                userId: userLoginStore.userInfor.id,
                carts: {
                    carts: updatedCart
                }
            }
        ))
    }

    function handleChangeQuantityProduct(productCart) {
        let updatedCart = cartData.map((product) => {
            if (product.productId === productCart.productId) {
                return productCart;
            } else {
                return product;
            }
        });

        setCartData(updatedCart);

        // Tính tổng giá trị mới
        let foodSubTotal = updatedCart.reduce((total, food) => {
            return total + food.price * food.quantity;
        }, 0);

        // Cập nhật tổng giá trị
        setSubTotal(foodSubTotal);

        dispatch(
            userLoginActions.updateCart({
                userId: userLoginStore.userInfor.id,
                carts: {
                    carts: updatedCart,
                },
            })
        );
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
                                setQuantity(quantity - 1)
                                handleChangeQuantityProduct(
                                    {
                                        ...food,
                                        quantity: quantity - 1
                                    }
                                )
                            }
                        }}>
                            <span className="material-symbols-outlined">
                                remove
                            </span>
                        </button>

                        <span className='quantity' style={{ fontSize: "18px" }}>{quantity}</span>

                        <button onClick={() => {
                            setQuantity(quantity + 1)
                            handleChangeQuantityProduct(
                                {
                                    ...food,
                                    quantity: quantity + 1
                                }
                            )
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
