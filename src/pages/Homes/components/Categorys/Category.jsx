import React from 'react'
import "./Category.scss"
import { useNavigate, useParams } from 'react-router'

export default function Category() {
    const navigate = useNavigate()
    
    return (
        <section className="category" id="category">

            <a className="box" onClick={() => navigate("/menu/combo")}>
                <img src="image/cat-1.png" alt="" />
                <h3>combo</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/pizza")}>
                <img src="image/cat-2.png" alt="" />
                <h3>pizza</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/burger")}>
                <img src="image/cat-3.png" alt="" />
                <h3>burger</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/chicken")}>
                <img src="image/cat-4.png" alt="" />
                <h3>chicken</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/dinner")}>
                <img src="image/cat-5.png" alt="" />
                <h3>dinner</h3>
            </a>

            <a className="box" onClick={() => navigate("/menu/drink")}>
                <img src="image/cat-6.png" alt="" />
                <h3>drink</h3>
            </a>

        </section>
    )
}
