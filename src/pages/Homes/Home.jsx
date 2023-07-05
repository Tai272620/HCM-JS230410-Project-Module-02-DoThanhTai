import React, { useEffect } from 'react';
import Banner from './components/Banners/Banner';
import Category from './components/Categorys/Category';
import About from './components/Abouts/About';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginActions } from '@stores/slices/userLogin.slice';

export default function Home() {
  const dispatch = useDispatch();
  const userLoginStore = useSelector(store => store.userLoginStore)

  useEffect(() => {
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
  }, [])

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (userLoginStore.userInfor != null) {
        if (localStorage.getItem("carts")) {
          if (userLoginStore.userInfor.carts.length == 0) {
            dispatch(userLoginActions.updateCart(
              {
                userId: userLoginStore.userInfor.id,
                carts: {
                  carts: JSON.parse(localStorage.getItem("carts"))
                }
              }
            ))
          } else {
            let carts = JSON.parse(localStorage.getItem("carts"));
            let jssCarts = [...userLoginStore.userInfor.carts];

            for (let i in carts) {
              for (let j in jssCarts) {
                if (carts[i].productId == jssCarts[j].productId) {
                  carts[i].quantity += jssCarts[j].quantity;
                  jssCarts.splice(j, 1);
                }
              }
            }

            let result = carts.concat(jssCarts);

            dispatch(userLoginActions.updateCart(
              {
                userId: userLoginStore.userInfor.id,
                carts: {
                  carts: result
                }
              }
            ))
          }
        }
      }
    }
  }, [])

  return (
    <div>
      <Banner />
      <Category />
      <About />
    </div>
  )
}



