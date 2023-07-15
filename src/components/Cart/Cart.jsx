import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  } else {
    message = (
      <div>
        <h3>Happy Shopping</h3>
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order Summary: {cart.length}
      </h2>
      <p className={`bold bordered ${cart.length === 3 ? "yellow" : "purple"}`}>
        Something
      </p>
      {cart.length > 2 ? (
        <span className="purple">Thank You</span>
      ) : (
        <span>More Buy</span>
      )}
      {message}
      {cart.map((tshirs) => (
        <p key={tshirs._id}>
          {tshirs.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirs._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double bonanza!!!</p>}
      {cart.length === 3 || <h3>Tinta to hoilo na!!</h3>}
    </div>
  );
};

export default Cart;

/**
 * CONDITIONAL RENDARING
 * 1. use if else to set a variable that will contain an element, component
 * 2. tarnary: condition ? 'for true' : ' false'
 * 3. Logical &&: (if the condition is true than the next thing will be displayed)
 *  4. Logical ||: (if the condition is false than the next thing will be displayed)
 */

/**
 * CONDITIONAL CSS Class
 *  1. use ternary
 *  2. tarnary inside tamplate string
 * **/
