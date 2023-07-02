import React from 'react'
import "./Banner.scss"

export default function Banner() {
    return (
        <section className="home" id="home">

            <div className="content">
                <span>welcome foodies</span>
                <h3>different spices for the different tastes 😋</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde dolores temporibus hic quam debitis tenetur harum nemo.</p>
                <a href="#" className="btn">order now</a>
            </div>

            <div className="image">
                <img src="image/home-img.png" alt="" className="home-img" />
                <img src="image/home-parallax-img.png" alt="" className="home-parallax-img" />
            </div>

        </section>
    )
}