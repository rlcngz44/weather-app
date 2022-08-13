const request = require ("request")

const url = "http://api.weatherstack.com/current?access_key=046e2a9cebd90c1a6bfdd729db82ff33&query=amsterdam"

request({url:url, json:true}, (error, response)=>{
    console.log(response.body.current)
})