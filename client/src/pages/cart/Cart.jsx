import React from 'react';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./cart.css";

export default function Cart() {
    return (
        <>
        <Header/>
        <div className="cart">
            <div className="cart_title">
                <h3>Your Cart</h3>
            </div>
            <div className="cart_item_container">
            <div className="cart_item">
                    <div className="cart_item_img">
                        <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt="" />
                    </div>
                    <div className="cart_item_info">
                        <div className="cart_item_info_right">
                            <p className="cart_item_name">Item 1</p>
                            <p className="cart_item_size">XS</p>
                            <button className="cart_item_remove">Remove</button>
                        </div>
                        <div className="cart_item_info_left">
                            <p className="cart_item_price">$20.00</p>
                            <p className="cart_item_quantity">2</p>
                            <p className="cart_item_total">$40.00</p>
                        </div>
                    </div>
                    
                </div>
                <div className="cart_item">
                    <div className="cart_item_img">
                        <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt="" />
                    </div>
                    <div className="cart_item_info">
                        <div className="cart_item_info_right">
                            <p className="cart_item_name">Item 1</p>
                            <p className="cart_item_size">XS</p>
                            <button className="cart_item_remove">Remove</button>
                        </div>
                        <div className="cart_item_info_left">
                            <p className="cart_item_price">$20.00</p>
                            <p className="cart_item_quantity">2</p>
                            <p className="cart_item_total">$40.00</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
