import React from 'react';
import "./Footer.scss";

export default function Footer() {
    return (
        <section className="footer">

            <div className="newsletter">
                <h3>newsletter</h3>
                <form action="">
                    <input type="email" name="" placeholder="enter your email" id="" />
                    <input type="submit" value="subscribe" />
                </form>
            </div>

            <div className="box-container">

                <div className="box">
                    <h3>our menu</h3>
                    <a href="#"><i className="fas fa-arrow-right"></i> pizza</a>
                    <a href="#"><i className="fas fa-arrow-right"></i> burger</a>
                    <a href="#"><i className="fas fa-arrow-right"></i> chicken</a>
                    <a href="#"><i className="fas fa-arrow-right"></i> pasta</a>
                    <a href="#"><i className="fas fa-arrow-right"></i> and more...</a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#home"> <i className="fas fa-arrow-right"></i> home</a>
                    <a href="#about"> <i className="fas fa-arrow-right"></i> about</a>
                    <a href="#popular"> <i className="fas fa-arrow-right"></i> popular</a>
                    <a href="#menu"> <i className="fas fa-arrow-right"></i> menu</a>
                    <a href="#order"> <i className="fas fa-arrow-right"></i> order</a>
                    <a href="#blogs"> <i className="fas fa-arrow-right"></i> blogs</a>
                </div>

                <div className="box">
                    <h3>extra links</h3>
                    <a href="#"> <i className="fas fa-arrow-right"></i> my order</a>
                    <a href="#"> <i className="fas fa-arrow-right"></i> my account</a>
                    <a href="#"> <i className="fas fa-arrow-right"></i> my favorite</a>
                    <a href="#"> <i className="fas fa-arrow-right"></i> terms of use</a>
                    <a href="#"> <i className="fas fa-arrow-right"></i> privary policy</a>
                </div>

                <div className="box">
                    <h3>opening hours</h3>
                    <p>monday : 7:00am to 10:00pm</p>
                    <p>tuesday : 7:00am to 10:00pm</p>
                    <p>wednesday : 7:00am to 10:00pm</p>
                    <p>friday : 7:00am to 10:00pm</p>
                    <p>saturday and sunday closed</p>
                </div>

            </div>

            <div className="bottom">

                <div className="share">
                    <a href="#" className="fab fa-facebook-f"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                    <a href="#" className="fab fa-pinterest"></a>
                </div>

                <div className="credit"> created <span>mr. web designer</span> | all rights reserved! </div>

            </div>

        </section>
    )
}
