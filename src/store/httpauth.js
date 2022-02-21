import axios from 'axios'
var request = require('ajax-request');
const requiredURL = "http://localhost/metrodog_dev/repo_new_metrodog_backend";
let headers = new Headers();
headers.append('Access-Control-Allow-Origin', '*');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS');
class API {
 HTTP(){
    const instance = axios.create({
        baseURL : requiredURL,
        headers: headers
    })
    return instance
 }
 FETCH(url, data, method){
     return new Promise((resolve) =>  {
        const helper = request({
            method: method,
            data: data,
            url: requiredURL + url,
            headers: headers
        }, function(err, res, body){
            console.log(res.data)
            return resolve(res)
        })
        return helper
     })
 }
}

export default new API()