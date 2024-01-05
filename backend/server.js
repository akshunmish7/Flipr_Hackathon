const express = require("express");
const dotenv=require("dotenv");
const app = express();
const port=process.env.PORT || 9000;
app.get("/",(req,res)=>{
    res.send("api is running");
});
app.listen(port,console.log("server started on port 9000"));