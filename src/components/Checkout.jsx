import { useContext } from "react"
import { currencyFormatter } from "../until/formatter"
import CartContext from "../store/CartContext"
import Modal from "./UI/Modal";
import Input from "./UI/Input";

export default function Checkout(){
    const cartCtx= useContext(CartContext);
    const cartTotal= cartCtx.items.reduce(
        (totalPrice, item)=> totalPrice + item.quantity * item.price
        ,0)

    return (
        <Modal>
            <form action="">
                <h2>Checkout</h2>
                <p> Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full Name" type="text" id="full-name"/>
                <Input label="Email Address" type="email" id="email"/>
                <Input label="Street" type="text" id="street"/>
            </form>
        </Modal>
    )
}