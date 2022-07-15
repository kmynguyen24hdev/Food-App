import classNames from "classnames/bind";
import { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.scss";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";
const cx = classNames.bind(styles);

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  }
  const cartItems = (
    <ul className={cx("cart-items")}>
      {cartCtx.items.map((item, index) => (
        <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)} 
            />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={cx("total")}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={cx("actions")}>
        <button className={cx("button--alt")} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={cx("button")}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
