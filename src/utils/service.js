import axios from 'axios';

const config = {
    baseUrl: process.env.REACT_APP_DB_URL
}

export default {
    get: async (extraUrl, callbackSuccess, callbackError) => {
        return axios
            .get(config.baseUrl + extraUrl)
            .then(response => {
                if (response && response.status === 200) {
                    callbackSuccess(response)
                }
            })
            .catch(err => {
                callbackError(err)
            })
    },
    post: async (extraUrl, payload, callbackSuccess, callbackError) => {
        return axios
            .post(config.baseUrl + extraUrl, payload)
            .then(response => {
                if (response && response.status === 200) {
                    callbackSuccess(response)
                }
            })
            .catch(err => {
                callbackError(err)
            })
    },
    put: async (extraUrl, payload, callbackSuccess, callbackError) => {
        return axios
            .put(config.baseUrl + extraUrl, payload)
            .then(response => {
                if (response && response.status === 200) {
                    callbackSuccess(response)
                }
            })
            .catch(err => {
                callbackError(err)
            })
    },
    del: async (extraUrl, callbackSuccess, callbackError) => {
        return axios
            .delete(config.baseUrl + extraUrl)
            .then(response => {
                if (response && response.status === 200) {
                    callbackSuccess(response)
                }
            })
            .catch(err => {
                callbackError(err)
            })
    }
}