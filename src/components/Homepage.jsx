import Typewriter from 'typewriter-effect';
import { GiHotMeal } from 'react-icons/gi';
import { motion } from 'framer-motion';

const Homepage = () => {
	return (
		<>
			<section className='homepage'>
				<div className='homepageOverlay'>
					<nav className='flex justify-around items-center pt-10'>
						<motion.h2
							initial={{ x: '100vw' }}
							animate={{ x: 0 }}
							className='homepageTitle'>
							yumShares
						</motion.h2>
						<div className='flex'>
							<a href='/signup' className='buttonnHomepage'>
								Sign up
							</a>
							<a href='/login' className='buttonnHomepage'>
								Login
							</a>
						</div>
					</nav>
					<div className='flex flex-col justify-center items-center mt-64 lg:mt-40'>
						<div className='paraHomepage mb-4'>
							<Typewriter
								options={{
									strings: ['Love to cook?'],
									autoStart: true,
									loop: true,
								}}
							/>
							<span>
								<GiHotMeal />
							</span>
						</div>
						<h2 className='paraHomepage'>
							<Typewriter
								options={{
									strings: ['Discover Delicious Recipes with YumShares'],
									autoStart: true,
									loop: true,
								}}
							/>
						</h2>
						<h2 className='paraHomepage mb-4 '>
							Your Ultimate Online Recipe Sharing Platform
						</h2>
						<div className='flex pt-4 slide-in-bottom'>
							<button>
								<a href='/signup' className='buttonnHomepage2'>
									Sign up
								</a>
							</button>
							<button>
								<a href='/login' className='buttonnHomepage2'>
									Login
								</a>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Homepage;
