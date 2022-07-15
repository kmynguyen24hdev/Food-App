import React from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

const Input = React.forwardRef((props, ref) => {
    return ( 
        <div className={cx('input')}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
     );
})

export default Input;