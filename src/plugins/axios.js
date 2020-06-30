import Vue from 'vue'
import axios from 'axios'


axios.defaults.baseURL="http://rap2api.taobao.org"
axios.defaults.headers.post["Content-type"] = "application/json"
axios.defaults.timeout=2500

axios.interceptors.request.use(function(config){
    return config;
}, function (error) {
    return Promise.reject(error);
})


axios.interceptors.response.use(function(response){
    if(response.status/100 == 2) {
        return response.data;
    }
    if(response.status/100 == 4) {
        return response.data.message;
    }
    if(response.status/100 == 5 ) {
        return "server error";
    }
}, function (error) {
    return Promise.reject(error)
})


Vue.prototype.axios = axios