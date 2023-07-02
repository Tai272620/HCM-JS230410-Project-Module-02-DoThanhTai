import React from 'react'
import "./About.scss"

export default function About() {
    return (
        <section className="about" id="about">

            <div className="image">
                <img src="image/about-img.png" alt="" />
            </div>

            <div className="content">
                <span>why choose us?</span>
                <h3 className="title">what's make our food delicious!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut explicabo, numquam iusto est a ipsum assumenda tempore esse corporis?</p>
                <a href="#" className="btn">read more</a>
                <div className="icons-container">
                    <div className="icons">
                        <img src="image/serv-1.png" alt="" />
                            <h3>fast delivery</h3>
                    </div>
                    <div className="icons">
                        <img src="image/serv-2.png" alt="" />
                            <h3>fresh food</h3>
                    </div>
                    <div className="icons">
                        <img src="image/serv-3.png" alt="" />
                            <h3>best quality</h3>
                    </div>
                    <div className="icons">
                        <img src="image/serv-4.png" alt="" />
                            <h3>24/7 support</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}
