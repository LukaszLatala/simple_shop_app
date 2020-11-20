import React, { Component } from "react";
import { productsData } from "./products_database/Products";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    products: [...productsData],
    cart: [],
  };

  addToCart = (product) => {
    console.log(product);
    this.setState({
      cart: [...this.state.cart, { ...product }],
    });
  };
  removeFromCart = (productToRemove) => {
    console.log(productToRemove);
    this.setState({
      cart: this.state.cart.filter((product) => product !== productToRemove),
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Products products={this.state.products} addToCart={this.addToCart} />

        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} />
        <Footer />
      </div>
    );
  }
}

export default App;
