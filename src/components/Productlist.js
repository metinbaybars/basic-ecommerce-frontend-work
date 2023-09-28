
import React from 'react';
import productsData from './product.json';


const ProductList = ({ addToCart }) => {
    

  return (
    <div>
      <div className="product-title">
        <div className="app-bar">
        <h2>Ürünlerim</h2>
        </div>
      </div>
      <div className="product-list">
        {productsData.products.map((product) => (
          <div key={product.id} className="product">
            <img src={`./img/${product.img}`}  />
            <h3>{product.name}</h3>
            <p>Fiyat: {Number(product.price)} TL</p>
            <p>Stok: {product.stock}</p>
            <button onClick={() => addToCart(product)}> Sepete Ekle </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
