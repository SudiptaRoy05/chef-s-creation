import PropTypes from "prop-types";

export default function Sidebar({ recipeQueue }) {
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
                  <td className="p-0 text-center"><button className="btn bg-green-400">preparing</button></td>
                  </tr>
                  )
                }
              
            </tbody>
          </table>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  recipeQueue: PropTypes.array,
};
