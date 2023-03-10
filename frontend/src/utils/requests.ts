import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const requestBackend = (config : AxiosRequestConfig) => {

    const headers = config.withCredentials ? {
        ...config.headers,
    } : config.headers;

    return axios({...config, baseURL: BASE_URL, headers});
}

const mapboxToken = '';

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}

