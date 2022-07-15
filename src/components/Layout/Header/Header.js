import { Fragment } from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import mealsImg from "../../../assets/meals.jpg";
import CartButton from "./CartButton";

const cx = classNames.bind(styles);

function Header(props) {
  return (
    <Fragment>
      <header className={cx("header")}>
        <h1>The Meal</h1>
        <CartButton onClick={props.onShowCart}/>
      </header>
      <div className={cx("main-image")}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header;
