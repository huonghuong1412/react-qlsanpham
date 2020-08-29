import axios from 'axios'
import * as api from '../constants/api'

export default function callAPI(path, method = 'GET', body) {
    return axios({
        method: method,
        url: `${api.API_URL}/${path}`,
        data: body
    }).catch((err) => {
        console.log(err)
    })
}