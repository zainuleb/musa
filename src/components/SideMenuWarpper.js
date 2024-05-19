import React from "react";

const SideMenuWarpper = () => {
  return (
    <div className="sidemenu-wrapper cart-side-menu d-none d-lg-block ">
      <div className="sidemenu-content">
        <button className="closeButton sideMenuCls">
          <i className="far fa-times"></i>
        </button>
        <div className="widget woocommerce widget_shopping_cart">
          <h3 className="widget_title">Shopping cart</h3>
          <div className="widget_shopping_cart_content">
            <ul className="woocommerce-mini-cart cart_list product_list_widget ">
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_1.png"
                    alt="Cart Image"
                  />
                  Car Safety Seat
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    940.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_2.png"
                    alt="Cart Image"
                  />
                  Bus Safety Hammer
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    899.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_3.png"
                    alt="Cart Image"
                  />
                  Car Steering Wheel
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    756.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_4.png"
                    alt="Cart Image"
                  />
                  Transponder Car Key
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    723.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times"></i>
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_5.png"
                    alt="Cart Image"
                  />
                  Safety Hand Glove
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    1080.00
                  </span>
                </span>
              </li>
            </ul>
            <p className="woocommerce-mini-cart__total total">
              <strong>Subtotal:</strong>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>
                4398.00
              </span>
            </p>
            <p className="woocommerce-mini-cart__buttons buttons">
              <a href="cart.html" className="th-btn wc-forward">
                View cart
              </a>
              <a href="checkout.html" className="th-btn checkout wc-forward">
                Checkout
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuWarpper;
