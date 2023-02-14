const express=require("express");
const port=require("./config/serverconfig.js")


const setUpAndStartServer= async() =>{
    // create the server
    const app=express()
   
    app.listen(port,()=>{
        console.log("Server started at this port no.",port);
    })
    
    


}
setUpAndStartServer();