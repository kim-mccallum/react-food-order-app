import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};
//outside the function so it doesn't recreate - receives state/action, returns a new snapshot
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        // const updatedItems = state.items.concat(action.item); //add an item to a NEW array (don't use push). IMMUTABLE OBJECTS

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem){
            const updatedItem = {
                ...existingCartItem, 
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item)
        }

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } if ( action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems; 
        if(existingItem.amount === 1){
            //remove the entire item
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            // just decrement
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems, 
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
};

// manage cart-context data and provide it to all components that need it
// pass props.children to allow any components that need to data
const CartProvider = props => {
    //useReducer returns array of 2 - snapshot, function which allows you to dispatch action
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        //dispatch action can be many things but is typically an object which has some identifiable property
        dispatchCartAction({type: 'ADD', item: item})
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;