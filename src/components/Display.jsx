import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Display = ({ meals }) => {
	if (!meals) {
		return null; // Return early if meals is null or undefined
	}

	return (
		<div className='dataContainer'>
			{meals.slice(0, 6).map((meal) => (
				<div
					key={meal.idMeal}
					className='shadow-2xl p-4 rounded-2xl hover:bg-indigo-300'>
					<img src={meal.strMealThumb} alt='food' />
					<h3 className='titleDisplay'>{meal.strMeal}</h3>
					<Link to={`/meals/${meal.idMeal}`}>
						<button className='btnDisplay'>Click to get Recipe</button>
					</Link>
				</div>
			))}
		</div>
	);
};

Display.propTypes = {
	meals: PropTypes.array,
};

export default Display;
