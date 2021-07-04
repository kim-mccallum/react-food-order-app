import { Fragment } from 'react';
import classes from './'

//render this in a modal overlay using a portal
const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>{[{id:'c1', name:'Sushi',price:12.99}].map(item => <li>{item.name}</li>)}</ul>;
    return (
        <div>
            cartItems
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
};

export default Cart;