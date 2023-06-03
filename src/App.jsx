import { Routes, Route } from 'react-router-dom';
// import PrivateRoutes from './utility/PrivateRoutes';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';
import Homepage from './components/Homepage';
import DisplayDetails from './components/DisplayDetails';
import RecipeForm from './components/RecipeForm'
import AddedRecipe from './components/AddedRecipe';
import PrivateRoutes from './utility/PrivateRoutes';

const App = () => {
	return (
		<>
			<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route element={<PrivateRoutes/>}>
						<Route path='/landing' element={<LandingPage />} />
						<Route path='/about' element={<About />} />
						<Route path='/meals/:id' element={<DisplayDetails />} />
						<Route path='/create' element={<RecipeForm/>} />
						<Route path='/add' element={<AddedRecipe />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			
		</>
	);
};

export default App;
