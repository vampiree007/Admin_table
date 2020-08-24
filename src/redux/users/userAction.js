import axios from 'axios';

// + Setting Up Bearer Token for API Call
const token = process.env.REACT_APP_TOKEN;

// + Setting Up Default Axios Parameters
axios.defaults.baseURL = 'http://66.175.217.67:3020/'
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}


export const setUser = () => {
    const users = axios.post('/argames/getQuery')
        .then(res => res.data.result)
        .catch(err => console.log(err));
    
    return({
        type: 'SET_USER',
        payload: users
    })
    
}