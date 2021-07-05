import { useEffect, useContext, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    const [buttonIsHighLighted, setButtonIsHighLighted] = useState(false);
    
    const { items } = cartCtx; //pull these out for depednencies

    // count items by type - transform array into single  number
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${buttonIsHighLighted ? classes.bump: ''}`;

    useEffect(() => {
        if (items.length === 0){
            return;
        }
        setButtonIsHighLighted(true)
        const timer = setTimeout(() => setButtonIsHighLighted(false), 300);
        //cleanup function- called automatically 
        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return <button className={btnClasses} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;