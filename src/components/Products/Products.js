import React from "react";
import "./Products.css";
const Products = ({ products, addToCart }) => {
  return (
    <>
      {products.map((product) => {
        const { id, name, cost, image } = product;
        return (
          <div className="products" key={id}>
            <h3 style={{ color: "red" }}>Nazwa: {name}</h3>
            <h4>Cena: {cost}</h4>
            <img src={image} alt={name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
};

export default Products;
