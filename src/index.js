const express = require("express");
const {PORT} = require("./config/serverConfig")
const bodyParser = require("body-parser");
const setupAndStartServer=async()=>{

    //create express app
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT,()=>{
        console.log("Server started at 3000");
      
    })
}


setupAndStartServer()