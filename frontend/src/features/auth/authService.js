import axios from 'axios';

const API_URL = '/api/users';

//Registrar usuario

const register = async (userData) => {
    const response = await axios.post(API_URL, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    //Retornar data de usuario y token
    return response.data;
}

const authService = {
    register
}

export default authService;