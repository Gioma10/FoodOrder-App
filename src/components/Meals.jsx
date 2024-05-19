import { useEffect, useState } from "react"
import MealItem from "./MealItem.jsx";

export default function Meals(){
    const [loadedMeals, setLoadedMeals]= useState([])

    useEffect(()=>{
        async function fetchMeals(){
            const  response= await fetch('http://localhost:3000/meals')
            if(!response.ok){
                // ...
            }
            const meals= await response.json();
            setLoadedMeals(meals);
        }    
        fetchMeals()
    }, [])
    console.log(loadedMeals);


    return (
        <ul className="grid grid-cols-3 gap-10 px-20 pb-10 ">
           {loadedMeals.map(meal => <MealItem key={meal.id} meal={meal}/>)}
        </ul>
    )
}