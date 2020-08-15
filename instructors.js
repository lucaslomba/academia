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

    let {avatar_url, birth, name, services, gender} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    //write Json archive for datas
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("write file error")

        return res.redirect("instructors")
    })
}


//Update


//Delete
