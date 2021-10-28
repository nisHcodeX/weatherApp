import axios from 'axios';

const apiController = axios.create(
    {
        baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL
    }
)
apiController.interceptors.request.use(
    config => {
        // config.headers['email'] = 'nishedha.srilak@gmail.com'
        // config.headers = {'email' : 'nishedha'}
        return config;
    }, error => {
        return Promise.reject(error)
    }
)

export default apiController;