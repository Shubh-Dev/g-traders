import React from 'react';
import products from '../objects/Products';
import './product.css';

const Product = () => (
  <div className="product">
    {products.map((product) => (
      <div className="product-item" key={product.id}>
        <div className="product-image-container">
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h4>
          $
          {product.price}
        </h4>
      </div>
    ))}
  </div>
);

export default Product;
