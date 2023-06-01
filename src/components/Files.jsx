import { useState, useEffect } from 'react';
import { storage } from '../appwrite/appwriteConfig';

const Files = () => {
	const [mediaFiles, setMediaFiles] = useState([]);

	const getMedia = async () => {
		const media = await storage.listFiles('6462f1b51b13a245e30a');
		setMediaFiles(media.files);
	};

	useEffect(() => {
		getMedia();
	}, []);

	return (
		<div>
			{mediaFiles.map((file) => (
				<div key={file.$id}>
					<div className='flex justify-center items-center mt-4'>
						<img
							src={storage.getFilePreview('6462f1b51b13a245e30a', file.$id)}
							alt='food-media'
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Files;
