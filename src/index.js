const express=require("express");
const {port}=require("./config/serverconfig.js")
const bodyparser=require("body-parser");




const setUpAndStartServer= async() =>{
    // create the server
    const app=express()
    
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))
   
    app.listen(port,()=>{
        console.log("Server started at this port no.",port);
    })
    
    


}
setUpAndStartServer();