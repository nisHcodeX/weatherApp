import axios from 'axios'

export const weatherApi = async(city) => {
    const key = 'd29580c975157828133141e66d31494a'
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?'
    try{
        const {data} = await axios.get(baseUrl + `q=${city}&cnt=5&appid=${key}`)
        return  data; 
    }
    catch(error){
        throw error;
    }
}
