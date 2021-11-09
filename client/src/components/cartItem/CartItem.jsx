import React from 'react';
import "./cartItem.css";

export default function CartItem({item}) {
    return (
        <div className="cart_item">
            <div className="cart_item_img">
                <img src={item.img} alt="" />
            </div>
            <div className="cart_item_info">
                <div className="cart_item_info_right">
                    <p className="cart_item_name">{item.name}</p>
                    <p className="cart_item_size">{item.size}</p>
                    <button className="cart_item_remove">Remove</button>
                </div>
                <div className="cart_item_info_left">
                    <p className="cart_item_price">${item.price}</p>
                    <p className="cart_item_quantity">{item.quantity}</p>
                    <p className="cart_item_total">${item.price * item.quantity}</p>
                </div>
            </div>
        </div>
    )
}
