import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../appwrite/appwriteConfig';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

const RecipeForm = () => {
	const navigate = useNavigate();
	const [recipeName, setRecipeName] = useState('');
	const [recipeDescription, setRecipeDescription] = useState('');
	const [recipeBuyList, setRecipeBuyList] = useState('');
	const [recipeInstructions, setRecipeInstructions] = useState('');
	const [addingRecipe, setAddingRecipe] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setAddingRecipe(true);

		const recipeData = {
			name: recipeName.trim().substring(0, 40), // Trim and limit name to 40 characters
			description: recipeDescription.trim().substring(0, 300), // Trim and limit name to 300 characters
			buyList: recipeBuyList.trim().substring(0, 500), // Trim and limit name to 500 characters
			instructions: recipeInstructions.trim().substring(0, 1000), // Trim and limit name to 1000 characters
		};

		// create document in the database
		database
			.createDocument(
				'646f1254160629dc1177',
				'646f12a79fd7ea58e341',
				uuidv4(),
				recipeData
			)
			.then(
				(res) => {
					console.log(res);
					navigate('/add');
					setRecipeName('');
					setRecipeDescription('');
					setRecipeBuyList('');
					setRecipeInstructions('');
				},
				(err) => {
					console.log(err);
				}
			)
			.finally(() => {
				setAddingRecipe(false);
			});
	};

	return (
		<>
			<Navbar />
			<div className='bg-indigo-100 pt-20 flex flex-col'>
				<form className='formContainer' onSubmit={handleSubmit} method='post'>
					<div className='flex flex-col'>
						<label htmlFor='name' className='pb-3 label'>
							Recipe Name
						</label>
						<input
							type='text'
							id='name'
							autoComplete='off'
							className='inputForm'
							value={recipeName}
							onChange={(e) => setRecipeName(e.target.value)}
						/>
					</div>
					<div className='flex flex-col mt-3'>
						<label htmlFor='description' className='pb-3 label'>
							Description of the meal
						</label>
						<textarea
							id='description'
							cols='10'
							rows='5'
							autoComplete='off'
							className='inputForm'
							value={recipeDescription}
							onChange={(e) => setRecipeDescription(e.target.value)}
							placeholder='Write here'></textarea>
					</div>
					<hr />
					<div className='flex flex-col mt-3'>
						<label htmlFor='buyList' className='pb-3 label'>
							What to buy / Ingredients
						</label>
						<textarea
							id='buyList'
							cols='30'
							rows='10'
							autoComplete='off'
							className='inputForm'
							value={recipeBuyList}
							onChange={(e) => setRecipeBuyList(e.target.value)}
							placeholder='Write here'></textarea>
					</div>
					<div className='flex flex-col mt-3'>
						<label htmlFor='instructions' className='pb-3 label'>
							Recipe Instructions
						</label>
						<textarea
							id='instructions'
							cols='30'
							rows='12'
							autoComplete='off'
							className='inputForm'
							value={recipeInstructions}
							onChange={(e) => setRecipeInstructions(e.target.value)}
							placeholder='Write here'></textarea>
					</div>
					<div className='flex justify-center items-center py-5'>
						<button type='submit' className='btnForm' disabled={addingRecipe}>
							{addingRecipe ? 'Adding Recipe...' : 'Add Recipe'}
						</button>
					</div>
				</form>
				<a href='#'>
					<div className='flex justify-end items-end p-4'>
						<BsFillArrowUpSquareFill className='text-blue-900 text-2xl lg:text-3xl ' />
					</div>
				</a>
			</div>

			<Footer />
		</>
	);
};

export default RecipeForm;
