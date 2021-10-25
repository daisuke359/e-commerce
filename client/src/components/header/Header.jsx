import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <nav className="header_nav">
                <div className="header_logo_container">
                    <Link to="/" className="header_logo">WHATEVER</Link>
                </div>
                <ul className="nav_list">
                    <li className="nav_item">
                        <Link className="item_link" to ="/">HOME</Link>
                    </li>
                    <li className="nav_item">
                        <Link className="item_link" to ="/collection/all">SHOP</Link>
                    </li>
                    <li className="nav_item">
                        <Link className="item_link" to ="/lookbook">LOOKBOOK</Link>
                    </li>
                    <li className="nav_item">
                        <Link className="item_link" to ="/cart">CART</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
