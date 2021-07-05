import Modal from '../UI/Modal/Modal';

import classes from './Cart.module.css'


//render this in a modal overlay using a portal
const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>{[{id:'c1', name:'Sushi',price:12.99}].map(item => <li key="c1">{item.name}</li>)}</ul>;
    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
};

export default Cart;