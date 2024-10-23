import { useEffect } from "react";
import { useState } from "react"
import Recipe from './Recipe'

export default function Recipes() {
  
    const [recieps, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('../../public/recipes_data.json')
        .then(res => res.json())
        .then(data => setRecipes(data))   
    },[])
    return (
    <div className="w-2/3 grid md:grid-cols-2 max-sm: grid-cols-1 gap-6 mt-5">
        {
            recieps.map((recipe, idx) => <Recipe key={idx} recipe ={recipe}></Recipe>)
        }
    </div>
  )
}
