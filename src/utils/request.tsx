import axios from 'axios'
import { deleteToken, getToken } from "./auth";


export interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST + ':' + import.meta.env.VITE_API_PORT || 'http://localhost:8086',
  timeout: import.meta.env.VITE_API_TIMEOUT || 5000,
});

instance.interceptors.request.use(
  function (config) {
    config.headers["token"] = getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  });

instance.interceptors.response.use(
  response => {
    if (response.data.code === -2) {
      confirm('登录过期，请重新登录');
    }
    return Promise.resolve(response.data);
  },
  error => {
    if (error.response) {
    } else {
     
    }
    return Promise.reject(error);
  });

export function get<T>(url: string, params?: any): Promise<ResponseData<T>> {
  return instance.get(url, {params})
}

export function post<T>(url: string, data?: any, params?: any): Promise<ResponseData<T>> {
  return instance.post(url, data, {params})
}

export function put<T>(url: string, data?: any, params?: any): Promise<ResponseData<T>> {
  return instance.put(url, data, {params})
}

export function del<T>(url: string, params?: any): Promise<ResponseData<T>> {
  return instance.delete(url, {params})
}
