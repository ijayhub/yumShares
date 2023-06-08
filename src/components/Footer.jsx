import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
	return (
		<>
			<div className='bg-slate-700 p-10'>
				<h2 className='yum'>yumShares</h2>
				<div className='footerlink-para'>
					<div className='lg:flex'>
						<a href='/home' className='mr-4 footerLink'>
							Home
						</a>
						<a href='/about' className='mr-4 footerLink'>
							About
            </a>
            <a href='/create' className='mr-4 footerLink'>
							Create
						</a>
					</div>
					<div>
						<p className='text-center footerPara mb-4'>
							Level up your culinary journey with yumShares! <br />
							Subscribe now for exclusive recipes, personalized recommendations
							and endless inspiration. <br />
							Join today and savor the flavor!
						</p>
						<div className='text-center'>
							<form action='https://fabform.io/f/da6gdet' method='post'>
								<input
									type='email'
									name='email'
									autoComplete='off'
									className='footerInput'
									placeholder='Enter email addy...'
								/>
								<button type='submit' className='footerBtn'>
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<section className='bg-black p-5'>
				<div className='footerTerms'>
					<div>
						<a href='#' className='mr-2'>
							Terms and condition
						</a>{' '}
						|
						<a href='#' className='ml-2'>
							Privacy Policy
						</a>
					</div>
					<div>
						<ul className='flex p-5 text-2xl'>
							<li>
								<a href='#'>
									<AiOutlineTwitter className='text-blue-600 ml-4' />
								</a>
							</li>
							<li>
								<a href='#'>
									<AiFillYoutube className='text-red-600 ml-4' />
								</a>
							</li>
							<li>
								<a href='#'>
									<AiFillLinkedin className='text-blue-600 ml-4' />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<hr />
				<div className='flex justify-center items-center mt-6'>
					<p className='text-white footerText'>
						Coded by <a href='https://github.com/ijayhub'>ijeoma💖</a>
					</p>
				</div>
			</section>
		</>
	);
};

export default Footer;
