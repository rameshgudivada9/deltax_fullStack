const app =require("./index.js");
const connect=require("./configs/db");

require("dotenv").config();
const PORT=process.env.PORT || 6667;
app.listen(PORT,async()=>{
    await connect();
    console.log("listening port 6667")
})

