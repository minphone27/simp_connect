import axios from 'axios'
import NProgress from 'nprogress'
import store from '../store/index'

let authToken = localStorage.getItem('access');

const clientAPI = axios.create({
    baseURL: `https://api.teachersucenter.com/api`,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${authToken}`
    },
})

clientAPI.interceptors.request.use(config => {
    NProgress.start()
    const authData = store.getters["auth/getAuthData"];
    if (authData == null) {
      return config;
    }
  
    config.headers.common["Authorization"] = `bearer ${authData.token}`;
    return config;
})

clientAPI.interceptors.response.use(
    response => {
        NProgress.done()
        return response
    },
    async (error) => {
        NProgress.done()
        if (error.response.status === 401) {
          const authData = store.getters["auth/getAuthData"];
          const payload = {
            refresh: authData.refreshToken,
          };
    
          var response = await axios.post(
            "https://api.teachersucenter.com/api/simpapi/refresh",
            payload
          );
          const data = {
              access:response.data.access,
              refresh:authData.refreshToken
            }
          await store.commit("auth/saveTokenData", data);
          error.config.headers[
            "Authorization"
          ] = `bearer ${response.data.access}`;
          return axios (error.config)
        } else {
          return Promise.reject(error);
        }
      }
    );

async function get(link){
  return clientAPI.get(link)
}

async function post(link, body){
  return clientAPI.post(link, body)
}

async function del(link, id){
  return clientAPI.delete(`${link}/${id}`)
}

async function put(link, id, body){
  return clientAPI.put(`${link}/${id}`, body)
}

export default{
  get, post, delete: del, put
}