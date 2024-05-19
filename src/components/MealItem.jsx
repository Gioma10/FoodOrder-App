import {currencyFormatter} from '../until/formatter.js'

export default function MealItem({meal}){
    return (
        <li className="text-center flex flex-col justify-around rounded overflow-hidden shadow-2xl">
            <img className="w-full" src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div className="flex min-h-40 items-center flex-col gap-3 px-6 pt-2">
                <h3>{meal.name}</h3>
                <p className="bg-gray-200 w-1/4 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2">
                    {currencyFormatter.format(meal.price)}
                </p>
                <p>{meal.description}</p>
            </div>
            <p className="flex flex-col justify-center items-center py-3">
                <button className="border text-gray-200 bg-red-700 px-4 py-2 rounded-full">Add to Cart</button>
            </p>
        </li>
    )
}