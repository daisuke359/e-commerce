import React, {useState} from 'react'
import { useParams } from 'react-router';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { products } from '../../data';
import "./itemDetail.css";
import { add_to_cart } from '../../actions/cart';
import { useDispatch } from 'react-redux';

export default function ItemDetail() {

    const id = useParams().id;
    const item = products.find(p => p.id === parseInt(id));
    const dispatch = useDispatch();

    const [itemSize, setItemSize] = useState("xs");

    const handleClick = (size) => {
        setItemSize(size);
    }

    const handleChange = () => {
        console.log(itemSize);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header/>
            <div className="detail">
                {item && (
                    <div className="item_container">
                        <div className="item_img_container">
                            <img src={item.img} alt="" />
                        </div>
                        <form onSubmit={handleSubmit} className="item_info">
                            <h3>{item.name}</h3>
                            <h4>${item.price}</h4>
                            <div className="item_sizes">
                                <div onClick={() => handleClick("xs")} className="item_size_container" style={{ border: itemSize === "xs" ? '1px solid black': 'none'}}>
                                    <label className="item_size_label" htmlFor="">XS</label>
                                    <input onChange={handleChange} type="radio" name="item-size" value="XS" className="item_size" checked={itemSize === 0}/>
                                </div>
                                <div onClick={() => handleClick("s")} className="item_size_container" style={{ border: itemSize === "s" ? '1px solid black': 'none'}}>
                                    <label className="item_size_label" htmlFor="">S</label>
                                    <input onChange={handleChange} type="radio" name="item-size" value="S" className="item_size" checked={itemSize === 1}/>
                                </div>
                                <div onClick={() => handleClick("m")} className="item_size_container" style={{ border: itemSize === "m" ? '1px solid black': 'none'}}>
                                    <label className="item_size_label" htmlFor="">M</label>
                                    <input onChange={handleChange} type="radio" name="item-size" value="M" className="item_size" checked={itemSize === 2}/>
                                </div>
                                <div onClick={() => handleClick("l")} className="item_size_container" style={{ border: itemSize === "l" ? '1px solid black': 'none'}}>
                                    <label className="item_size_label" htmlFor="">L</label>
                                    <input onChange={handleChange} type="radio" name="item-size" value="L" className="item_size" checked={itemSize === 3}/>
                                </div>
                                <div onClick={() => handleClick("xl")} className="item_size_container" style={{ border: itemSize === "xl" ? '1px solid black': 'none'}}>
                                    <label className="item_size_label" htmlFor="">XL</label>
                                    <input onChange={handleChange} type="radio" name="item-size" value="XL" className="item_size" checked={itemSize === 4}/>
                                </div>
                            </div>
                            <button onClick={() => dispatch(add_to_cart({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                size: itemSize,
                                quantity: 1,
                                img: item.img,
                            }))} className="item_add">ADD TO CART</button>
                            <div className="item_desc">
                                <p>PRE-ORDER SALE</p>
                                <p>REGULAR FIT</p>
                                <p>100% ORGANIC COTTON</p>
                                <p>WORLDWIDE SHIPPING: DELIVERY & HANDLING</p>
                                <p>AUTHENTIC WHATEVER GOODS ARE ONLY AVAILABLE THROUGH WHATEVER.COM. DO NOT BUY FROM A THIRD PARTY RESELLER SINCE THOSE WILL BE COUNTERFEIT.</p>
                            </div>
                        </form>
                    </div>
                )} 
                <Footer/>   
            </div>
        </>
    )
}
