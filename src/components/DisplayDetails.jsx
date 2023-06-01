import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { ThreeDots } from 'react-loader-spinner';
import Footer from './Footer';
import { RWebShare } from 'react-web-share';
import { BsShareFill } from 'react-icons/bs';


const DisplayDetails = () => {
  const [recipes, setRecipe] = useState([]);
  const [pendings, setPendings] = useState(true);
  const [error, setError] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setRecipe(data.meals);
				setPendings(false);
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
				setPendings(false);
			});
	}, [id]);

	return (
		<div>
			<Navbar />
			{pendings && (
				<div className='flex items-center justify-center mt-6 lg:mt-20'>
					<ThreeDots
						height='50'
						width='50'
						radius='9'
						color='red'
						ariaLabel='three-dots-loading'
						wrapperStyle={{}}
						wrapperClassName=''
						visible={true}
					/>
				</div>
			)}

			{!pendings && (
				<section className='detailContainer slide-in-bottom'>
					{recipes.map((recipe) => (
						<div key={recipe.idMeal} className='d-container'>
							<aside>
								<img
									src={recipe.strMealThumb}
									alt={recipe.strMeal}
									className='imgDetail'
								/>
								<h2 className='detailsTitle'>{recipe.strMeal}</h2>
							</aside>
							<article className='details'>
								<h3 className='details-ingredient'>What to Buy</h3>
								<div>
									<p className='details-recipe'>{recipe.strIngredient1}</p>
									<p className='details-recipe'>{recipe.strIngredient2}</p>
									<p className='details-recipe'>{recipe.strIngredient3}</p>
									<p className='details-recipe'>{recipe.strIngredient4}</p>
									<p className='details-recipe'>{recipe.strIngredient5}</p>
									<p className='details-recipe'>{recipe.strIngredient6}</p>
									<p className='details-recipe'>{recipe.strIngredient7}</p>
									<p className='details-recipe'>{recipe.strIngredient8}</p>
									<p className='details-recipe'>{recipe.strIngredient9}</p>
									<p className='details-recipe'>{recipe.strIngredient10}</p>
									<p className='details-recipe'>{recipe.strIngredient11}</p>
									<p className='details-recipe'>{recipe.strIngredient12}</p>
									<p className='details-recipe'>{recipe.strIngredient13}</p>
									<p className='details-recipe'>{recipe.strIngredient14}</p>
									<p className='details-recipe'>{recipe.strIngredient15}</p>
									<p className='details-recipe'>{recipe.strIngredient16}</p>
									<p className='details-recipe'>{recipe.strIngredient17}</p>
									<p className='details-recipe'>{recipe.strIngredient18}</p>
									<p className='details-recipe'>{recipe.strIngredient19}</p>
									<p className='details-recipe'>{recipe.strIngredient20}</p>
								</div>
								<div className='pt-5'>
									<h3 className='details-cook'>Direction</h3>

									<p className='detail-text'>{recipe.strInstructions}</p>
								</div>
							</article>
							<div className='detail-vid'>
								<button className='p-1 bg-red-700 text-white font-mono rounded-lg'>
									<a href={recipe.strYoutube}>Visual video</a>
								</button>
								<button className='p-1 bg-indigo-700 text-white font-mono rounded-lg'>
									<a href={recipe.strSource}>Source</a>
								</button>
							</div>
							<div className='flex justify-end items-end '>
								<RWebShare
									data={{
										text: 'yumShare platform',
										url: '',
										title: 'yumShare',
									}}
									onClick={() => console.log('shared successfully!')}>
									<button className='bg-green-700 text-white p-2 rounded-lg mb-5'>
										<BsShareFill />
									</button>
								</RWebShare>
							</div>
						</div>
					))}
				</section>
			)}
			{error && (
				<div className='text-center md:text-2xl font-mono font-bold mt-3'>
					{error}
				</div>
			)}

			<Footer />
		</div>
	);
};

export default DisplayDetails;
