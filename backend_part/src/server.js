const app = require("./index.js")
const connect = require("./configs/db");

require("dotenv").config();
const PORT=process.env.PORT || 6078
app.listen (PORT, async function(){
    await connect ();
    console.log("Listening on port 6078");
})