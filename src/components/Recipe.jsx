import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";


export default function Recipe({ recipe, addRecipeToQueue}) {
  const { recipe_name, image, short_description, preparing_time, ingredients,calories } =
    recipe;
  return (
    <div className="card card-compact border p-2">
      <figure>
        <img src={image} alt={`food ${recipe_name}`} />
      </figure>
      <div className="card-body">
        <div className="border-b pb-2">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-sm">{short_description}</p>
        </div>
        <div className="border-b pb-2">
          <p className="font-bold">Ingredients : {ingredients.length}</p>
          <ul className="ml-3 text-sm ">
            {ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <p className="flex items-center gap-1">
            <span className="text-xl">
              <IoTimeOutline />
            </span>
            {preparing_time} min
          </p>
          <p className="flex items-center gap-1 justify-end"><span className="text-xl"><AiOutlineFire /></span>{calories} calories</p>
        </div>
        <div className="card-actions">
          <button onClick={()=>addRecipeToQueue(recipe)} className="border px-8 rounded-full bg-green-400 font-semibold btn">Want to Cook</button>
        </div>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  addRecipeToQueue: PropTypes.func.isRequired
};
