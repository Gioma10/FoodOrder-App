import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../until/formatter.js";
import UserProgressContext from "../store/UserProgressContex.jsx";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart(){
    const cartCtx= useContext(CartContext);
    const userProgressCtx= useContext(UserProgressContext);

    const cartTotal= cartCtx.items.reduce(
        (totalPrice, item)=> totalPrice + item.quantity * item.price
        ,0)

    function handleCloseCart(){
        userProgressCtx.hideCart();
    }
    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item)=>{
                    return(
                        <CartItem 
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            onIncrese={()=>cartCtx.addItem(item)}
                            onDecrese={()=>cartCtx.removeItem(item.id)}/>
                    )
                })}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="flex gap-4 justify-end">
                <Button onClick={handleCloseCart} textOnly>Close</Button>
                {cartCtx.items.length > 0 &&
                    <Button onClick={handleCloseCart} >Go to checkout</Button>
                }
            </p>
        </Modal>
    )
}