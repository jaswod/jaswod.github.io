const Ghdb = require("../libs/ghdb");
require('dotenv').config({debug: false});

export default async (req, res) => {
    const { query: { uuid }, } = req
    var ghdbObj = new Ghdb( { personalAccessToken: process.env.ACCESSTOKEN, 
        owner: process.env.GH_USER, 
        repo: process.env.GH_REPOSITORY, 
        path: process.env.GH_PATH } )
    
    var myList = await ghdbObj.read(uuid)
    res.statusCode = 200
    res.json(myList)
}
  