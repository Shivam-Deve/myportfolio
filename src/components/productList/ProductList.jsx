import React from 'react'
import './ProductList.scss'
import Product from '../product/Product';
import { products } from '../../data';
function ProductList() {
    return (
        <div className="productList">
            <div className="texts">
                <h1 className="title">Create & inspire. It's Lama</h1>
                <p className="desc">
                    Lama is a creative portfolio that your work has been waiting for.
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