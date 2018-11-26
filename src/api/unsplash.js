import Axios from 'axios';
const KEY = require('../config/key');

export default Axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: `Client-ID ${KEY.CLIENT_ID}`,
	}
});
