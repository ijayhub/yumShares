

import { Navigate, Outlet } from 'react-router-dom';
import { account } from '../appwrite/appwriteConfig';


const PrivateRoutes = () => {
	
	const isAuthenticated = account.get();
	console.log(isAuthenticated);
	return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
