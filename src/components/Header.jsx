import FastFoofLogo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import CartContext from '../store/CartContext'

export default function Header(){
    const cartCtx= useContext(CartContext)

    const totalCartItems= cartCtx.items.reduce(
        (totalNumberOfItems, item)=> totalNumberOfItems + item.quantity, 0)

    return (
        <header className="flex justify-between items-center p-10">
            <div className='flex items-center'>
                <img className=' w-1/6' src={FastFoofLogo} alt="fasto-food-logo" />
                <p className='min-[600px]:text-2xl w-5/6  ' >Fast Food Delivery</p>
            </div>
            <div className='flex justify-center '>
                <button><FontAwesomeIcon className=' fa-xl' icon={faCartShopping} /> ({totalCartItems})</button>
            </div>
        </header>
    )
}