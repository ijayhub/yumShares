import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { account } from '../appwrite/appwriteConfig.js';
import { MdRestaurant } from 'react-icons/md';
import jollof from '../img/Jollof.jpg';


const Login = () => {
	const navigate = useNavigate();
	
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		const promise = account.createEmailSession(user.email, user.password);
		promise.then(res => {
			console.log(res)
			
			navigate('/landing'); // Redirect to landing page on success
		})
			.catch(error => {
				console.log(error); // Handle error (e.g., show error message)
			})
	};

	// Handle Google authentication
	const handleGoogleAuth = (e) => {
		e.preventDefault();
		// Go to OAuth provider login page using Appwrite
		account.createOAuth2Session('google', 'http://127.0.0.1:5173/landing');
	};

	

	return (
		<div className='grid grid-cols-1 md:grid-cols-2'>
			<div className='flex justify-center items-center flex-col pt-20 lg:pt-0 px-5'>
				<form onSubmit={handleSubmit} className='formContainer'>
					<h2 className='heading-span1'>Login to yumShares</h2>

					<div className='flex flex-col mb-2 font-bold'>
						<label htmlFor='email' className='mb-3 label'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							autoComplete='off'
							className='input'
							value={user.email}
							onChange={(e) => setUser({ ...user, email: e.target.value })}
						/>
					</div>
					<div className='flex flex-col font-bold mb-3'>
						<label htmlFor='password' className='mb-2 label'>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							autoComplete='off'
							className='input'
							value={user.password}
							onChange={(e) => setUser({ ...user, password: e.target.value })}
						/>
					</div>
					<div className='flex justify-center flex-center mb-3 pt-4'>
						<button type='submit' className='btnSignUp label'>
							Login
						</button>
					</div>
					<div className='flex justify-between items-center'>
						<div className='flex items-center justify-center'>
							<input type='checkbox' name='checkbox' id='checkbox' />
							<span className='label ml-2'>Remember me</span>
						</div>
						<a href='#' className='text-indigo-500 font-bold label'>
							Forgot password
						</a>
					</div>
					<h2 className='hr-linesLogin label'>Or continue with</h2>

					<div className='flex justify-center flex-center mb-3'>
						<button
							type='button'
							onClick={handleGoogleAuth}
							className='btnSignUp2 label'>
							Google Account
						</button>
					</div>
					<div className='flex label justify-center items-center pt-3'>
						Dont have an account?{' '}
						<a href='/signup' className='text-indigo-500 font-bold ml-1 label'>
							Sign Up
						</a>
					</div>
				</form>
			</div>
			<div className='imageContainer'>
				<MdRestaurant className='text-red-500 text-2xl' />
				<h2 className='heading-2'>
					Welcome to <span className='heading-span'>yumShares</span>
				</h2>
				<div className='yumImage'>
					<img src={jollof} alt='signUp' className='image' />
				</div>
			</div>
		</div>
	);
};


// Login.propTypes = {
// 	handleLogin: PropTypes.func.isRequired,
// };

export default Login;
