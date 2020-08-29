import axios from 'axios'
import * as api from '../constants/api'

export default function callAPI(enpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${api.API_URL}/${enpoint}`,
        data: body
    }).catch((err) => {
        console.log(err)
    })
}