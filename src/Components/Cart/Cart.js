import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';

import classes from './Cart.module.css'


//render this in a modal overlay using a portal
const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {};

    const cartItemAddHandler = item => {};

    // const cartItems = <ul className={classes['cart-items']}>{[{id:'c1', name:'Sushi',price:12.99}].map(item => <li key="c1">{item.name}</li>)}</ul>;
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount}
                price={item.price} 
                onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                onAdd={cartItemAddHandler.bind(null, item)}/>
            ))}
        </ul>
    );


    return (
        <Modal onCloseCart={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;