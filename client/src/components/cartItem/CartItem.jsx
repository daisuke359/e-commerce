import React from 'react';
import "./cartItem.css";
import { useDispatch } from 'react-redux';
import { remove_from_cart } from '../../actions/cart';

export default function CartItem({item}) {

    const dispatch = useDispatch();

    return (
        <div className="cart_item">
            <div className="cart_item_img">
                <img src={item.img} alt="" />
            </div>
            <div className="cart_item_info">
                <div className="cart_item_info_right">
                    <p className="cart_item_name">{item.name.toUpperCase()}</p>
                    <p className="cart_item_size">{item.size.toUpperCase()}</p>
                    <button onClick={() => dispatch(remove_from_cart(item))} className="cart_item_remove">Remove</button>
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
