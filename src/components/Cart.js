import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cartItems, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [checkoutBtn, setCheckoutBtn] = useState(false);

  const discountRate = 0.2;

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );
  const discountedTotalPrice = discount
    ? totalPrice - totalPrice * discountRate
    : totalPrice;

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const applyDiscount = () => {
    setDiscount(true);
  };

  const handleCheckout = () => {
    console.log("Sepeti post et:", cartItems);
    console.log("Toplam tutarı post et:", discountedTotalPrice);
  };

  const handleCheckoutToggle = () => {
    setCheckoutBtn(!checkoutBtn);
  };

  return (
    <div className="cart-container">
      <button className="cart-button" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faCartShopping} />
        Sepetim ({cartItems.length})
      </button>
      {showCart && (
        <div className="cart-dropdown">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} TL
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <p>Toplam Fiyat: {discountedTotalPrice} TL</p>

          <div>
            <button className="checkout-btn" onClick={handleCheckoutToggle}>
              {" "}
              Check-Out{" "}
            </button>

            {checkoutBtn && (
              <div>
                {!discount && (
                  <button className="discount-button" onClick={applyDiscount}>
                    %20 İndirim Uygula <FontAwesomeIcon icon={faTags} />
                  </button>
                )}
                <button className="checkout-button" onClick={handleCheckout}>
                  Alışverişi Tamamla <FontAwesomeIcon icon={faCreditCard} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
