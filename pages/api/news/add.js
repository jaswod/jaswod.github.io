const Ghdb = require("../libs/ghdb");
require('dotenv').config({debug: false});

export default async (req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 401
        res.json({error:"This method only accept POST call."})
        return
    }
    var ghdbObj = new Ghdb( { personalAccessToken: process.env.ACCESSTOKEN, 
        owner: process.env.GH_USER, 
        repo: process.env.GH_REPOSITORY, 
        path: process.env.GH_PATH } )
    // Validate obj

    //ghdbObj.create()
    console.log(req.body)
    res.statusCode=200
    res.json(req.body)
  }
  
  /* 
  For example:
   $ curl -X POST http://localhost:3000/api/news/add -d "hola=adeu"
   {"hola":"adeu"}
  
  */