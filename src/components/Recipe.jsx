import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";


export default function Recipe({ recipe }) {
  const { recipe_name, image, short_description, preparing_time, ingredients,calories } =
    recipe;
  return (
    <div className="card card-compact bg-base-100 shadow-xl border p-2">
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
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1">
            <span className="text-xl">
              <IoTimeOutline />
            </span>
            {preparing_time}
          </p>
          <p className="flex items-center gap-1"><span className="text-xl"><AiOutlineFire /></span>{calories}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="border px-4 py-2 rounded-lg bg-purple-400 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};
