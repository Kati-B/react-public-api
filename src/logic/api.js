import axios from 'axios';

export const getReposByUserName = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}/repos`);
}