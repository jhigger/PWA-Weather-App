import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'ace2efa80c952855e24b7aec283f4c06';

export const fetchWeather = async (query) => {
	const {data} = await axios.get(URL, {
		params: {
			q: query,
			units: 'metric',
			APPID: API_KEY
		}
	});

	return data;
};
