
import notfound from '../img/notfound.svg'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Notfound = () => {
	return (
		<>
			<Navbar/>
			<div className='flex flex-col justify-center items-center'>
				<img src={notfound} alt='not found' className='notfound' />
				<p className='lg:text-3xl text-white'>
					Go back to <Link to='/home'>Homepage</Link>
				</p>
			</div>
			<Footer/>
		</>
	);
};

export default Notfound;
