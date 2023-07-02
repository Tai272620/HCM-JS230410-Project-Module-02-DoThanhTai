import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

export default function Navbar() {
    const navigate = useNavigate();
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
                        <Link to="/menu/combo"><a className="dropdown-item">Combo</a></Link>
                        <Link to="/menu/pizza"><a className="dropdown-item">Pizza</a></Link>
                        <Link to="/menu/burger"><a className="dropdown-item">Burger</a></Link>
                        <Link to="/menu/chicken"><a className="dropdown-item">Chicken</a></Link>
                        <Link to="/menu/dinner"><a className="dropdown-item">Dinner</a></Link>
                        <Link to="/menu/drink"><a className="dropdown-item">Drink</a></Link>
                    </ul>
                </div>
                <a href="#order">Order</a>
                <a href="#blogs">Blogs</a>
            </nav>

            <div className="icons">
                <div id="menu-btn" className="fas fa-bars"></div>
                <div id="search-btn" className="fas fa-search"></div>
                <div id="cart-btn" className="fas fa-shopping-cart" onClick={() => navigate("/cart")}></div>
                <div id="login-btn" className="fas fa-user" onClick={() => navigate("/login")}></div>
            </div>
        </header>
    )
}
