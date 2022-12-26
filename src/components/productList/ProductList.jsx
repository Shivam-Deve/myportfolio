import React from 'react'
import './ProductList.scss'
import Product from '../product/Product';
import { products } from '../../data';
function ProductList() {
    return (
        <div className="productList" id="products">
            <div className="texts">
                <h1 className="title">Click & Explore</h1>
                <p className="desc">
                    Hover over to see | Click to explore.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList