import React, { useEffect, useState } from 'react';
import "./Menu.scss";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { convertToVND, randomId } from '@mieuteacher/meomeojs';
import { productActions } from '../../stores/slices/product.slice';
import { userLoginActions } from "@stores/slices/userLogin.slice"
import FoodModal from '../../components/Modals/FoodModal';

export default function Menu() {

  const { type } = useParams();

  const dispatch = useDispatch();

  const productStore = useSelector(store => store.productStore);

  useEffect(() => {
    dispatch(productActions.filterProductByType(type))
  },[type])

  return (
    <section className="popular" id="popular">

    <div className="heading">
        <span>popular food</span>
        <h3>our special dishes</h3>
    </div>

    <div className="box-container">

        {productStore.listProducts?.map((food) =>
            <div className="box" key={randomId()}>
                <a href="#" className="fas fa-heart"></a>
                <div className="image">
                    <FoodModal food={food}></FoodModal>
                </div>
                <div className="content">
                    <h5>{food.name}</h5>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <span> (50) </span>
                    </div>
                    <div className="price"><span>{convertToVND(food.price)}</span></div>
                    {/* <a class="btn">add to cart</a> */}
                </div>
            </div>
        )}
    </div>
</section>
  )
}

