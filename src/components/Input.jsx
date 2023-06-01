import { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ searchRecipe }) => {
	const [search, setSearch] = useState('');
	// create a function to handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		searchRecipe(search);
		setSearch('');
	};
	return (
		<form className='inputHome' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Search Recipe...'
				className='inputHome'
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className='btnContainer'>
				<button type='submit' className='btnContainer1'>
					search
				</button>
			</div>
		</form>
	);
};

Input.propTypes = {
	searchRecipe: PropTypes.func.isRequired,
};

export default Input;
