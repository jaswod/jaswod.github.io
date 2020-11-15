const Ghdb = require("../libs/ghdb");
require('dotenv').config({debug: false});

export default async (req, res) => {
    var ghdbObj = new Ghdb( { personalAccessToken: process.env.ACCESSTOKEN, 
        owner: process.env.GH_USER, 
        repo: process.env.GH_REPOSITORY, 
        path: process.env.GH_PATH } )
    
    var myList = await ghdbObj.getFromCategoryObjects('post')
    if (!myList) {
        myList = []
    } else {
        await ghdbObj.sortByField(myList, "updateAt", "ASC")
    }
    res.statusCode = 200
    res.json(myList)
}
  