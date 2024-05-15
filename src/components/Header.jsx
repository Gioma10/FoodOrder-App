import FastFoofLogo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return (
        <header className="flex justify-between items-center p-10">
            <div className='flex myborder items-center'>
                <img className='myborder w-1/6' src={FastFoofLogo} alt="" />
                <p className='min-[600px]:text-2xl w-5/6 myborder ' >Fast Food Delivery</p>
            </div>
            <div className='flex justify-center myborder'>
                <button><FontAwesomeIcon className=' fa-xl' icon={faCartShopping} /> (0)</button>
            </div>
        </header>
    )
}