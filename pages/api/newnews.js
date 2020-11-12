const Ghdb = require("./libs/ghdb");
require('dotenv').config({debug: true});

export default async (req, res) => {
    var ghdbObj = new Ghdb( { personalAccessToken: process.env.ACCESSTOKEN, 
        owner: process.env.GH_USER, 
        repo: process.env.GH_REPOSITORY, 
        path: process.env.GH_PATH } )
    
    var myList = await ghdbObj.getFromCategoryObjects('post')
    await ghdbObj.sortByField(myList, "updateAt", "ASC")
    console.log(myList)
    res.statusCode = 200
    res.json(myList)
  }
  