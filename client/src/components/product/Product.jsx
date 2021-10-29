import React from 'react';
import { Link } from 'react-router-dom';
import "./product.css";

export default function Product({product}) {
    return (
        <div className="product">
            <Link to={`/collection/${product.id}`}>
                <img src={product.img} alt="" />
            </Link>
            <div className="product_price"><span>${product.price}</span></div>
        </div>
    )
}
