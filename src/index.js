const express = require("express");
const {PORT} = require("./config/serverConfig")
const setupAndStartServer=async()=>{

    //create express app
    const app = express();

    app.listen(PORT,()=>{
        console.log("Server started at 3000");
    })
}


setupAndStartServer()