import axios from 'axios'
import { NProgress } from 'nprogress'

const clientAPI = axios.create({
    baseURL: `api.teachersucenter.com/api/connect`,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json"
    }
})

clientAPI.interceptors.request.use(config => {
    NProgress.start()
    return config
})

clientAPI.interceptors.response.use(config => {
    NProgress.done()
    return config
})

export default{
    async get(link){
        return clientAPI.get(link);
    },
    async post(link, body){
        return clientAPI.post(link, body)
    },
    async delete(link, id){
        return clientAPI.delete(`${link}/${id}`)
    },
    async put(link, id){
        return clientAPI.put(`${link}/${id}`, body)
    }
}

