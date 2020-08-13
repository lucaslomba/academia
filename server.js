//npm install express to generate a server
//npm install -D nodemon to restart a server every time to save 
//-D = dev dependencies
const express = require('express')
//npm install nunjucks = template enginner
const nunjucks = require('nunjucks')

const server = express()
//import data of videos
const videos = require("./data")

server.use(express.static('public'))

//Config archive html
server.set("view engine", "njk")

//views is a folder, 
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

//Server get to add bar a url
//req = request and res = response
server.get("/", function(req, res){
    //return Hi to user in your display
    //return res.send("Hi! How's going?")
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/54440202?s=460&u=84762df5ab87892579649a3cce5c4bd371dd770e&v=4",
        name: "Lucas Lomba",
        role: "Aluno - RocketSeat",
        description: "Programador full-Stack, focado em aprender novas techs",
        links: [
            {name: "GitHub", url: "https://github.com/lucaslomba"},
            {name: "Linkedin", url: "https://linkedin/lucas-lomba"}
        ]
    }
    
return res.render("about", { about })
})

server.get("/portfolio", function(req, res){
    //return Hi to user in your display
    //return res.send("Hi! How's going?")
    return res.render("portfolio", {
        items: videos
    })
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function (video){
        return video.id == id
    })

    if(!video){
        return res.send("Video not found")
    }


    return res.render("video", {item: video })
})

//server listening the port 5000
server.listen(5000, function(){
    console.log("Server is runing")
})

