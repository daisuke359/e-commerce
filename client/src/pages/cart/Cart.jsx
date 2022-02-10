import React from 'react';
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./cart.css";
import {useSelector} from "react-redux";
import CartItem from '../../components/cartItem/CartItem';

export default function Cart() {

    const cart = useSelector(state => state.cart);
    console.log(cart);

    return (
        <>
        <Header/>
        <div className="cart">
            <div className="cart_title">
                <h3>Your Cart ({cart.length})</h3>
            </div>
            <div className="cart_item_container">
                {cart.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </div>
        </div>
        <Footer/>
        </>
    )
}

