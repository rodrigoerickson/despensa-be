const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extend:true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BE is running on port ${port}`)
})