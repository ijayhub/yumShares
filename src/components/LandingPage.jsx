import { useEffect, useState } from "react"
import Footer from "./Footer"
import Input from "./Input"
import Navbar from "./Navbar"
import Display from "./Display"
import { ThreeDots } from "react-loader-spinner"


const LandingPage = () => {
	const [meals, setMeals] = useState([]);
	const [term, setTerm] = useState('');
	const [error, setError] = useState(null)
	const [pendings, setPendings] = useState(true)

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setMeals(data.meals)
				setPendings(false)
			})
			.catch((err) => {
				console.log(err.message)
				setError(err.message)
				setPendings(false)
		})
	}, [term]);

		
    return (
			<div>
				<Navbar />
				<section className='hero'>
					<div className='overlay'>
						<h2 className='headingLand'>{term}</h2>

						<Input searchRecipe={(search) => setTerm(search)} />
					</div>
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

					{!pendings && <Display meals={meals} />}
					{error && (
						<div className='text-center md:text-2xl font-mono font-bold py-3 text-red-700'>
							{error}
						</div>
					)}
					<Footer />
				</section>
			</div>
		);
}

export default LandingPage