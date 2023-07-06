import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userLoginActions } from '../../stores/slices/userLogin.slice';
import Loading from '@components/Loadings/Loading'
import axios from 'axios';

export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLoginStore = useSelector(store => store.userLoginStore);

    const [loadingCheck, setLoadingCheck] = useState(false);
    useEffect(() => {
        if (userLoginStore.userInfor == null) {
            if (localStorage.getItem("token")) {
                dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
            }
        } else {
            navigate('/')
        }
    }, [userLoginStore.userInfor])
    return (
        <div >
            {
                userLoginStore.loading || loadingCheck ? <Loading></Loading> : <></>
            }
            <form onSubmit={async (e) => {
                e.preventDefault();
                if (e.target.inputUserEmail.value == "" || e.target.inputUserName.value == "" || e.target.inputPassword.value == "" || e.target.inputRePassword.value == "") {
                    alert("Please Enter Your Information !")
                    return
                }
                if (e.target.inputPassword.value !== e.target.inputRePassword.value) {
                    alert("Please Check your Password ")
                    return
                }
                if (loadingCheck) {
                    return
                }
                setLoadingCheck(true)
                let resultCheck = await axios.get(process.env.REACT_APP_SERVER_JSON + "users" + "?email=" + e.target.inputUserEmail.value);
                if (resultCheck.data.length != 0) {
                    console.log(resultCheck.data);
                    alert("This account already exists ");
                    setLoadingCheck(false)
                    return
                }
                setLoadingCheck(false)
                console.log(e.target.inputUserName.value,
                    e.target.inputUserEmail.value
                );
                dispatch(userLoginActions.register(
                    {
                        userName: e.target.inputUserName.value,
                        email: e.target.inputUserEmail.value,
                        password: e.target.inputPassword.value,
                        isAdmin: false,
                        firstName: "New",
                        lastName: "Member",
                        avatar: "https://i.pinimg.com/564x/c8/49/d3/c849d35b6502f1e9918b4f1d5e43f10a.jpg",
                        carts: []
                    }
                ))
            }}>
                <h1>Register</h1>
                <div className='form-control'>
                    <label htmlFor="">Email</label><br />
                    <input id="valueEmail" name='inputUserEmail' type="text" placeholder="YOUR EMAIL" />
                </div>
                <div className='form-control'>
                    <label htmlFor="">User name</label><br />
                    <input id="valueUserName" name='inputUserName' type="text" placeholder="YOUR NAME" /> <br />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label><br />
                    <input id="valuePassword" name='inputPassword' type="password" placeholder="PASSWORD" /> <br />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label><br />
                    <input id="confirm" name='inputRePassword' type="password" placeholder="CONFIRM PASSWORD" /> <br />
                </div>

                <button type='submit'>SIGN IN</button>
            </form>
        </div>

    )
}
