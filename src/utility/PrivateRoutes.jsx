import { Navigate, Outlet } from 'react-router-dom';



const PrivateRoutes = () => {
	
	const isAuthenticated = localStorage.getItem('cookieFallback');
	console.log(isAuthenticated);
	return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
