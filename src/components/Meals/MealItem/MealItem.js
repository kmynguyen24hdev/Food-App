import classNames from "classnames/bind";
import { useContext } from "react";
import CartContext from "../../../store/cartContext";
import styles from "./MealItem.module.scss";
import MealItemForm from "./MealItemForm";

const cx = classNames.bind(styles);

function MealItem(props) {
    const cartCtx = useContext(CartContext)

    const priceConvert = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return ( 
        <li className={cx("meal")}>
            <div>
                <h3>{props.name}</h3>
                <div className={cx('description')}>{props.description}</div>
                <div className={cx('price')}>{priceConvert}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
     );
}

export default MealItem;