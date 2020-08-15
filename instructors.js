const fs = require('fs')
const data = require('./data.json')

//Create
exports.post = function(req, res){
    //req.query
    //rec.body

    const keys = Object.keys(req.body)

    for( key of keys){
        if(req.body[key] == ""){
            return res.send('Please, fill all fields!')
        }
    }

    req.body.birth = Date.parse(req.body.birth)
    req.body.created_at = Date.now()
    //write Json archive for datas
    data.instructors.push(req.body)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("write file error")

        return res.redirect("instructors")
    })
}


//Update


//Delete
