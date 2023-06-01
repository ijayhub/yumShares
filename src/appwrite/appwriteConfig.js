import { Client, Account, Databases } from 'appwrite';

const client = new Client();
client
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject('6462f1082e8c444ad3f9');
	
//account
export const account = new Account(client);

// // image
// export const storage = new Storage(client);

// Database
export const database = new Databases(client, '6462f1b51b13a245e30a');


