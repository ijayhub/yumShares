import { useNavigate } from "react-router-dom";


const Navbar = () => {
	const navigate=useNavigate()
	
	const handleLogOut = () => {
		console.log('current')
		localStorage.removeItem('cookieFallback');
		navigate('/')
	}
  return (
		<nav className='flex justify-around items-center text-white bg-black p-5'>
			<div>
				<a href='/home'>
					<h1 className='yum hover:text-indigo-400'>YumShares</h1>
				</a>
			</div>
			<div className='flex '>
				<ul className='flex'>
					<li className='text-red-600 p-2 rounded-3xl mr-2 hover:bg-indigo-400'>
						<a href='/landing' className='yumShares'>
							Home
						</a>
					</li>
					<li className='text-red-600 p-2 rounded-3xl mr-2 hover:bg-indigo-400'>
						<a href='/about' className='yumShares'>
							About
						</a>
					</li>
					<li className='text-red-600 p-2 rounded-3xl mr-2 hover:bg-indigo-400'>
						<a href='/create' className='yumShares'>
							Create
						</a>
					</li>
					
				</ul>
			</div>
			<div className='flex items-center justify-end'>
				<button
					className='bg-red-600 px-2 py-1 rounded-xl  hover:bg-indigo-400'
					onClick={handleLogOut}>
					Logout
				</button>
			</div>
		</nav>
	);
}

export default Navbar