import Axios from 'axios';
import KEY from '../config/key'

export default Axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: `Client-ID ${KEY.CLIENT_ID}`,
	}
});
