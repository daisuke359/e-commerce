import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="main">
            <h2>WHATEVER</h2>
            <Link className="link_shop" to="/collection/all">SHOP</Link>
            <form className="sub_from">
                <input type="text" placeholder="YOUR EMAIL" />
                <button type="submit">SUBSCRIBE</button>
            </form>
        </div>
    )
}
