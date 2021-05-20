import React from 'react';

const ProductList = (props) => {

    return (
        <div>
            {props.products.map((product, index) => {
                return <div>
                    <p key={index}>
                        <a href={`/products/${product._id}`}>{product.title}</a>
                    </p>
                </div>
            })}
        </div>
    )
}

export default ProductList; 