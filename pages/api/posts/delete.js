const Ghdb = require("../libs/ghdb");
require('dotenv').config({debug: false});

export default async (req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 401
        res.json({error:"This method only accept DELETE call."})
        return
    }
    // Validate obj
    
    if ((!req.body) || (!req.body.uuid)) {
        res.statusCode = 401
        res.json({error:"Parameter uuid is not defined."})
        return       
    }
    var objId
    try {
        objId = req.body.uuid
    } catch (e) {
        res.statusCode = 401
        res.json({error:"Some problem in uuid parameter."})
    }
    var ghdbObj = new Ghdb( { personalAccessToken: process.env.ACCESSTOKEN, 
        owner: process.env.GH_USER, 
        repo: process.env.GH_REPOSITORY, 
        path: process.env.GH_PATH } )
        
    const retCall = await ghdbObj.remove(objId)

    res.statusCode=200
    res.json(retCall)
  }
