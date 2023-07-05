import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginActions } from "@stores/slices/userLogin.slice"
import SearchModal from '@components/Modals/SearchModal';

export default function Navbar() {
    const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLoginStore = useSelector(store => store.userLoginStore)

    useEffect(() => {
        checkIsLogin();
    }, []);

    function checkIsLogin() {
        const token = localStorage.getItem("token");
        setIsLogin(token);
    }

    const handleLogout = () => {
        if (window.confirm("Bạn có muốn đăng xuất không?")) {
            localStorage.removeItem("token");
            dispatch(userLoginActions.logOut());
            navigate("/login");
        }
    };

    useEffect(() => {
        checkIsLogin();
    }, [userLoginStore]); // Theo dõi thay đổi của userLoginStore để cập nhật isLogin



    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
    }, [])

    return (
        <header className="header">

            <Link to="/" className="logo"> <i className="fas fa-utensils"></i> food </Link>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <a href="#about" onClick={() => navigate("/")}>About</a>
                <a href="#popular">Popular</a>
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle menu-button"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Menu
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to="/menu/combo"><span className="dropdown-item">Combo</span></Link>
                        <Link to="/menu/pizza"><span className="dropdown-item">Pizza</span></Link>
                        <Link to="/menu/burger"><span className="dropdown-item">Burger</span></Link>
                        <Link to="/menu/chicken"><span className="dropdown-item">Chicken</span></Link>
                        <Link to="/menu/dinner"><span className="dropdown-item">Dinner</span></Link>
                        <Link to="/menu/drink"><span className="dropdown-item">Drink</span></Link>
                    </ul>
                </div>
                <a href="#order">Order</a>
                <a href="#blogs">Blogs</a>
            </nav>

            <div className="icons">
                <div id="menu-btn" className="fas fa-bars"></div>
                {/* <div id="search-btn" className="fas fa-search"></div> */}
                <SearchModal />
                <div id="cart-btn" className="fas fa-shopping-cart" onClick={() => navigate("/cart")}></div>
                {isLogin ? (
                    // Nút đăng xuất
                    <div
                        id="logout-btn"
                        className="fas fa-sign-out-alt"
                        onClick={handleLogout}
                    ></div>
                ) : (
                    // Nút đăng nhập
                    <div
                        id="login-btn"
                        className="fas fa-user"
                        onClick={() => {
                            navigate("/login");
                        }}
                    ></div>
                )}
            </div>
        </header>
    )
}
