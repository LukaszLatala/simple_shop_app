import React from "react";
import "./Cart.css";
const Cart = ({ cart, removeFromCart }) => {
  return (
    <>
      <h1>Your Cart</h1>
      {cart.map((product) => {
        const { id, name, cost, image } = product;
        return (
          <div className="products" key={id}>
            <h3 style={{ color: "red" }}>Nazwa: {name}</h3>
            <h4>Cena: {cost}</h4>
            <img src={image} alt={name} />
            <button onClick={() => removeFromCart(product)}>
              Remove From Cart
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
