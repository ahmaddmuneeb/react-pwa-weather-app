import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '03146cd51a998bb75e9939cfe72a7515';

export const fetchWeather = async (query) => {
    // get response from api using axios call and query
    const { data } = await axios.get(URL, {
        //parameters for using the required fetched data
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}