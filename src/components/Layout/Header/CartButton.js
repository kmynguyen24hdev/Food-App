import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import CartIcon from "../../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cartContext";
const cx = classNames.bind(styles);

function CartButton(props) {
  const [btnIsHightlighted, setBtnIsHightlighted] = useState(false)
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx // const item = cartCtx.items

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = cx("buttonCart", btnIsHightlighted ? 'bump' :'')

  useEffect(() => {
    if(items.length === 0) return
    setBtnIsHightlighted(true)

    //xoa animation hd 300ms
    const timer=setTimeout(() => {
      setBtnIsHightlighted(false)
    },300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={cx("icon")}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cx("badge")}>{numberOfCartItems}</span>
    </button>
  );
}

export default CartButton;
