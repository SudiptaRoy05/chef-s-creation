import { useEffect } from "react";
import { useState } from "react"
import Recipe from './Recipe'
import PropTypes from "prop-types";

export default function Recipes({addRecipeToQueue}) {
  
    const [recieps, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('recipes_data.json')
        .then(res => res.json())
        .then(data => setRecipes(data))   
    },[])
    return (
    <div className="w-2/3 grid md:grid-cols-2 max-sm: grid-cols-1 gap-6 mt-5 max-sm:w-full">
        {
            recieps.map((recipe) => <Recipe key={recipe.recipe_id} recipe ={recipe}
            addRecipeToQueue={addRecipeToQueue}
            ></Recipe>)
        }
    </div>
  )
}


Recipes.propTypes = {
    addRecipeToQueue: PropTypes.func,
  };