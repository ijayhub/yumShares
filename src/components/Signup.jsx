import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite/appwriteConfig';
import { v4 as uuidv4 } from 'uuid';
import { MdRestaurant } from 'react-icons/md';
import jollof from '../img/Jollof.jpg';

const Signup = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		confirm: '',
	});

	const signupUser = async (e) => {
		e.preventDefault();

		const promise = account.create(
			uuidv4(),
			user.email,
			user.password,
			user.name,
			user.confirm
		);
		promise
			.then(function (response) {
				console.log(response);
				navigate('/login');
				alert('Account successfully registered');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const googleAuth = (e) => {
		e.preventDefault();
		account.createOAuth2Session('google', 'http://127.0.0.1:5173/login');
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-2'>
			<div className='imageContainer'>
				<MdRestaurant className='text-red-500 text-2xl' />
				<h2 className='heading-2'>
					Welcome to <span className='heading-span'>yumShares</span>
				</h2>
				<div className='yumImage'>
					<img src={jollof} alt='signUp' className='image' />
				</div>
			</div>
			<div className='flex justify-center items-center flex-col pt-10 lg:pt-0 px-5'>
				<form action='#' method='post'>
					<h2 className='heading-span1'>Create Your Account</h2>
					<div className='flex flex-col mb-3'>
						<label htmlFor='name' id='name' className='mb-2 font-bold label'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							required
							className='input'
							autoComplete='off'
							onChange={(e) =>
								setUser({
									...user,
									name: e.target.value,
								})
							}
						/>
					</div>
					<div className='flex flex-col mb-2 font-bold'>
						<label htmlFor='email' id='email' className='mb-3  label'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							className='input'
							autoComplete='off'
							onChange={(e) =>
								setUser({
									...user,
									email: e.target.value,
								})
							}
						/>
					</div>
					<div className='flex flex-col  font-bold mb-3'>
						<label htmlFor='password' id='password' className='mb-2  label'>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							required
							autoComplete='off'
							className='input'
							onChange={(e) =>
								setUser({
									...user,
									password: e.target.value,
								})
							}
						/>
					</div>
					<div className='flex flex-col  font-bold mb-3'>
						<label htmlFor='confirm' id='confirm' className='mb-2  label'>
							Confirm Password
						</label>
						<input
							type='password'
							id='confirm'
							name='confirm'
							autoComplete='off'
							className='input'
							required
							onChange={(e) =>
								setUser({
									...user,
									confirm: e.target.value,
								})
							}
						/>
					</div>
					<div className='flex justify-center flex-center mb-3'>
						<button
							type='submit'
							onClick={signupUser}
							className='btnSignUp label'>
							Register
						</button>
					</div>
					<div className='flex'>
						<input type='checkbox' name='checkbox' id='checkbox' />
						<p className='ml-2  label'>
							By checking you agree to the{' '}
							<span className='text-indigo-500 font-bold'>
								Terms and condition
							</span>
						</p>
					</div>
					<h2 className='hr-lines label'>Or continue with</h2>
					<div className='flex justify-center flex-center'>
						<button
							type='submit'
							onClick={googleAuth}
							className='btnSignUp2  label'>
							Google Account
						</button>
					</div>
				</form>
				<div className='flex label pt-2'>
					Already have an account?{' '}
					<a href='/login' className='text-indigo-500 font-bold ml-1  label'>
						Login
					</a>
				</div>
			</div>
		</div>
	);
};

export default Signup;
