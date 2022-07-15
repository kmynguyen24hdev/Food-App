import classNames from "classnames/bind";
import { Fragment } from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom" 
const cx = classNames.bind(styles);

const Backdrop = (props) => {
  return <div className={cx("backdrop")} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={cx("modal")}>
      <div className={cx("content")}>{props.children}</div>
    </div>
  );
};

//tạo ra một component, 
//có style không bị ảnh hưởng bởi thành phần parent của nó 
//va bất kể level mà nó được render
// dung Portal

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
}

export default Modal;
