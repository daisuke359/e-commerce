import React from 'react'
import { useParams } from 'react-router';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { products } from '../../data';
import "./itemDetail.css";

export default function ItemDetail() {

    const id = useParams().id;
    const item = products.find(p => p.id == id);

    console.log(item);

    return (
        <>
            <Header/>
            <div className="detail">
                {item && (
                    <div className="item_container">
                        <div className="item_img_container">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="item_info">
                            <h3>{item.name}</h3>
                            <h4>${item.price}</h4>
                            <ul className="item_sizes">
                                <li className="item_size">XS</li>
                                <li className="item_size">S</li>
                                <li className="item_size">M</li>
                                <li className="item_size">L</li>
                                <li className="item_size">XL</li>
                            </ul>
                            <button className="item_add">ADD TO CART</button>
                            <div className="item_desc">
                                <p>PRE-ORDER SALE</p>
                                <p>REGULAR FIT</p>
                                <p>100% ORGANIC COTTON</p>
                                <p>WORLDWIDE SHIPPING: DELIVERY & HANDLING</p>
                                <p>AUTHENTIC WHATEVER GOODS ARE ONLY AVAILABLE THROUGH WHATEVER.COM. DO NOT BUY FROM A THIRD PARTY RESELLER SINCE THOSE WILL BE COUNTERFEIT.</p>
                            </div>
                        </div>
                    </div>
                )} 
                <Footer/>   
            </div>
        </>
    )
}


/*








*/