import React, { useEffect, useState } from 'react';
import "./Menu.scss";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import { productActions } from '../../stores/slices/product.slice';

export default function Menu() {

  const { type } = useParams();

  const dispatch = useDispatch();

  const productStore = useSelector(store => store.productStore)

  useEffect(() => {
    dispatch(productActions.findAllProducts())
  },[])

  // console.log(productStore);

  const listFoods = productStore.listProducts.filter((food) => food.type === type)

  return (
    <section className="popular" id="popular">

    <div className="heading">
        <span>popular food</span>
        <h3>our special dishes</h3>
    </div>

    <div className="box-container">

        {listFoods.map((food, index) =>
            <div class="box" key={randomId()}>
                <a href="#" class="fas fa-heart"></a>
                <div class="image">
                    <img src={food.url} alt="" />
                </div>
                <div class="content">
                    <h5>{food.name}</h5>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span> (50) </span>
                    </div>
                    <div class="price">{convertToUSD(food.price)} <span>$50.00</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>
        )}
    </div>
</section>
  )
}

