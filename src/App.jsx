import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipe from "./components/OurRecipe"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const addRecipeToQueue =(recipe)=>{
    const isExist = recipeQueue.find(previousRecipe =>previousRecipe.recipe_id === recipe.recipe_id);
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe]);
    }else{
      alert('Recipe already exist in the queue')
    }
   
  }
  // console.log(recipeQueue);
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <section className="w-11/12 mx-auto gap-5 flex flex-col md:flex-row">
        {/* card section  */}
       <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* sidebar  */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
     
    </>
  )
}

export default App
