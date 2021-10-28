import apiController from './requestController'

export const weatherApi = async (city) => {
    try {
        const { data } = await apiController.get(`/forecast?q=${city}&cnt=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        return data;
    }
    catch (error) {
        throw error;
    }
}
