import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from "../../components/header/Header";
import Product from '../../components/product/Product';
import { products } from '../../data';
import "./collection.css";

export default function Collection() {

    return (
        <div className="collection">
          <Header />

          <div className="collection_main">
              {products.map((p,index) => (
                  <Product product={p} key={index}/>
              ))}
          </div>
          <Footer/>
        </div>
        
    )
}
