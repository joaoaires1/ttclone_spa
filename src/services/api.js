import axios from 'axios';
import { api_url } from '../utils/constants';
import { getAccessToken } from '../utils/helpers';

const api = axios.create({
    baseURL: api_url,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
    }
});

/**
 * Call login api
 * @param username
 * @param password
 */
export const apiLogin = async (username, password) => {
    try {
        const { data } = await api.post('/login', {
            username,
            password
        });
        
        return data;
    } catch (error) {
        return false;
    }
}

/**
 * Call get posts api
 * @param username
 * @param perfil_page
 * @param page
 */
export const apiGetPosts = async (username, perfil_page, page) => {
    try {
        const { data } = await api.get('/posts', {
           params: {
            username,
            perfil_page,
            page
           }
        });
        
        return data;
    } catch (error) {
        return false;
    }
}

/**
 * Call store posts api
 * @param text
 */
export const apiStorePost = async (text) => {
    try {
        const { data } = await api.post('/posts', {
           text
        });
        
        return data;
    } catch (error) {
        return false;
    }
}

/**
 * Call store posts api
 * @param name
 */
export const apiSearchUsers = async (name) => {
    try {
        const { data } = await api.get('/search', {
            params: {
                name
            }
        });
        
        return data;
    } catch (error) {
        return false;
    }
}
