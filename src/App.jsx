import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipe from "./components/OurRecipe"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const [perpareRecipe, SetperpareRecipe] = useState([])
  const [times, setTime] = useState(0)
  const [calories, setCalories] = useState(0)



  const addRecipeToQueue =(recipe)=>{
    const isExist = recipeQueue.find(previousRecipe =>previousRecipe.recipe_id === recipe.recipe_id);
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    }else{
      alert('Recipe already exist in the queue')
    }
  }


  const handlePreparebtn=(id)=>{
    console.log(id);
    const deletedRecipe = recipeQueue.find( recipe => recipe.recipe_id === id)
    const updateQueue = recipeQueue.filter(recipe=> recipe.recipe_id !== id)
    setRecipeQueue(updateQueue);
    SetperpareRecipe([...perpareRecipe, deletedRecipe])
  }

  const calcuateTimeAndCalories=(time, calo)=>{
      setTime(times + Number(time));
      setCalories(calories + Number(calo));
  }
  
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <section className="w-11/12 mx-auto gap-5 flex flex-col md:flex-row">
        {/* card section  */}
       <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* sidebar  */}
        <Sidebar
        times={times}
        calories={calories}
        calcuateTimeAndCalories={calcuateTimeAndCalories}
        perpareRecipe={perpareRecipe} handlePreparebtn={handlePreparebtn} recipeQueue={recipeQueue}></Sidebar>
      </section>
     
    </>
  )
}

export default App
