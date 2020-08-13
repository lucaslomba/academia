//npm install express to generate a server
//npm install -D nodemon to restart a server every time to save 
//-D = dev dependencies
const express = require('express')
//npm install nunjucks = template enginner
const nunjucks = require('nunjucks')
//Import routes.js
const routes = require("./routes")

const server = express()

server.use(express.static('public'))
server.use(routes)

//Config archive html
server.set("view engine", "njk")

//views is a folder, 
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

//server listening the port 5000
server.listen(5000, function(){
    console.log("Server is runing")
})

