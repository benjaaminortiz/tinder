import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-project0.herokuapp.com/'
});

export default instance