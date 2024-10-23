import PropTypes from "prop-types";

export default function Sidebar({ recipeQueue,handlePreparebtn, perpareRecipe, calcuateTimeAndCalories,times ,calories }) {
  return (
    <div className="w-1/3 mt-5 max-sm:w-full">
      <div className="border p-2 rounded-xl">
        <p className="font-bold text-xl border-b text-center pb-2">Want to cook : {recipeQueue.length}</p>
        <table className="table">
            <thead>
              <th >Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </thead>
            <tbody>
              
                {
                  recipeQueue.map((resQueue, idx) => <tr key={idx} className="hover">
                  <td className="p-0 text-[12px] font-bold">{resQueue.recipe_name}</td>
                  <td className="p-0 text-center">{resQueue.preparing_time}</td>
                  <td className="p-0 text-center">{resQueue.calories}</td>
                  <td className="p-0 text-center"><button onClick={()=>{
                    handlePreparebtn(resQueue.recipe_id),
                    calcuateTimeAndCalories(resQueue.preparing_time, resQueue.calories)
                  }} className="btn bg-green-400 ">preparing</button></td>
                  </tr>
                  )
                }
              
            </tbody>
          </table>
      </div>

      <div className="border p-2 rounded-xl mt-5">
        <p className="font-bold text-xl border-b text-center pb-2">Currently Cook : {perpareRecipe.length}</p>
        <table className="table">
            <thead>
              <th >Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </thead>
            <tbody>
              
                {
                  perpareRecipe.map((preQueue, idx) => <tr key={idx} className="hover">
                  <td className="p-0 text-[12px] font-bold">{preQueue.recipe_name}</td>
                  <td className="p-0 text-center">{preQueue.preparing_time}</td>
                  <td className="p-0 text-center">{preQueue.calories}</td>
                  </tr>
                  )}
                  <tr>
                    <td></td>
                    <td>TotalTime : {times}</td>
                    <td> TotalCalories : {calories}</td>
                  </tr>
              
            </tbody>
          </table>
      </div>
      
    </div>
  );
}

Sidebar.propTypes = {
  recipeQueue: PropTypes.array,
  perpareRecipe: PropTypes.array,
  handlePreparebtn: PropTypes.func.isRequired,
  calcuateTimeAndCalories: PropTypes.func.isRequired,
  calories: PropTypes.number,
  times: PropTypes.number
};
