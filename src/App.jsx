import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipe from "./components/OurRecipe"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <section className="w-11/12 mx-auto gap-5 flex flex-col md:flex-row">
        {/* card section  */}
       <Recipes></Recipes>
        {/* sidebar  */}
        <Sidebar></Sidebar>
      </section>
     
    </>
  )
}

export default App
