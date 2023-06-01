import Navbar from "./Navbar";
import Footer from './Footer';


const About = () => {
  return (
		<>
			<Navbar />
			<div className='foodAbout'>
				<div className='aboutContainer'>
					<div>
						<h2 className='headingAbout'>Introducing yumShares</h2>
						<p className='smallPara'>The Tastiest Way to Discover and Share Recipes.</p>
					</div>

					<div className='paraAbout'>
						<p className='mb-2'>
							Are you a food enthusiast who loves trying out new recipes and
							sharing your culinary adventures with others?<br/> Look no further than
							yumShares, the ultimate platform for foodies to connect, explore,
							and exchange their favorite recipes.
						</p>
						<p className='mb-2'>
							At yumShares, we believe that good food is meant to be shared. Our
							platform brings together passionate home cooks,
							seasoned chefs, and food lovers from all around the world. Whether
							you are a novice in the kitchen or a master chef, yumShares offers
							something for everyone.
						</p>
						Here is what you can expect from yumShares:
						<p className='mb-2'>
							1. Discover a World of Flavors: Browse through an extensive
							collection of mouthwatering recipes contributed from traditional family recipes to innovative dishes,
							there is an endless array of culinary creations waiting for you to
							explore.
						</p>
						<p className='mb-2'>
							{' '}
							2.Share Your Culinary Creations: Showcase your cooking skills by
							sharing your own recipes with the yumShares. From
							delectable desserts to savory main courses, your recipes can
							inspire others to embark on their own gastronomic journeys.
						</p>
						<p className='mb-2'>
							3. Collaborate on Recipe Projects: Collaborate with other users to
							create and refine recipe projects. 
						</p>
						<p className="pb-4">
							{' '}
							4. Get Inspired: find a wealth of inspiration and knowledge.<br/> Join
							the yumShares today and embark on a culinary journey
							like no other. Whether you are looking to sharpen your cooking
							skills, or simply discover new recipes, yumShares has all the
							ingredients to satisfy your cravings for culinary delights. Get
							ready to immerse yourself in a world of flavors, creativity, and
							shared culinary experiences. Subscribe to yumShares newsletter and let your
							taste buds embark on an unforgettable adventure. <br/> Happy cooking and
							sharing!
						</p>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
}

export default About
