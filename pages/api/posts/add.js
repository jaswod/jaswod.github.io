const Ghdb = require("../libs/ghdb");
require('dotenv').config({debug: false});

export default async (req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 401
        res.json({error:"This method only accept POST call."})
        return
    }
    // Validate obj
    
    if ((!req.body) || (!req.body.object)) {
        res.statusCode = 401
        res.json({error:"Parameter object is not defined."})
        return       
    }
    var obj
    try {
        obj = JSON.parse(req.body.object)
    } catch (e) {
        res.statusCode = 401
        res.json({error:"object parameter is not json."})
    }
    var ghdbObj = new Ghdb( { personalAccessToken: process.env.ACCESSTOKEN, 
        owner: process.env.GH_USER, 
        repo: process.env.GH_REPOSITORY, 
        path: process.env.GH_PATH } )
        
    const uuid = await ghdbObj.create(obj, 'post')

    res.statusCode=200
    res.json({uuid: uuid, obj: obj})
  }
  

  /* 
  For example:
   $ curl -X POST http://localhost:3000/api/news/add -d "hola=adeu"
   {"hola":"adeu"}
  
  */