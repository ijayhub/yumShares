import { useState, useEffect } from 'react';
import { database } from '../appwrite/appwriteConfig';
import Navbar from './Navbar';
import { RWebShare } from "react-web-share";
import{BsShare} from 'react-icons/bs';
import Footer from './Footer';


const AddedRecipe = () => {
	const [newRecipes, setNewRecipes] = useState([]);
	
	useEffect(() => {
		const getYumShares = async () => {
			try {
				const response = await database.listDocuments(
					'646f1254160629dc1177',
					'646f12a79fd7ea58e341'
				);
				setNewRecipes(response.documents);
			} catch (error) {
				console.log(error);
			}
		};

		getYumShares();
	}, []);

	return (
		<>
			<Navbar />
			<section className='addRecipeContainer slide-in-bottom'>
				{newRecipes.map((recipe) => (
					<div key={recipe.$id} className='addRecipe'>
						<div className='name'>
							<h2 className='font-bold text-red-700 text-2xl pb-2'>
								Recipe Name
							</h2>
							{recipe.name}
						</div>
						<hr />
						<div className='buyList'>
							<p className='font-bold text-red-700 text-2xl pb-2'>
								Description of the meal
							</p>
							{recipe.description}
						</div>
						<hr />
						<div className='buyList'>
							<p className='font-bold text-red-700 text-2xl pb-2'>
								What to buy / Ingredients
							</p>
							{recipe.buyList}
						</div>
						<hr />
						<div className='instructions mb-4'>
							<p className='font-bold text-red-700 text-2xl pb-2'>
								Recipe Instruction
							</p>
							{recipe.instructions}
						</div>
						<div className='flex justify-end items-end'>
							<RWebShare
								data={{
									text: 'yumShare platform',
									url: '',
									title: 'yumShare',
								}}
								onClick={() => console.log('shared successfully!')}>
								<button>
									<BsShare />
								</button>
							</RWebShare>
						</div>
					</div>
				))}
			</section>
			<Footer />
		</>
	);
};

export default AddedRecipe;
