import express from "express"; //import basic express
import config from "./config.js"; //importing the mongodb connections from the config.js file
import mongoose from "mongoose";
import router from "./routes/router.js";
import cors from "cors";


const {mongodbURL,PORT}=config;
const app=express();

//middleware parsing 
app.use(express.json());

//CORS policy
app.use(cors());


app.use("/farmer-details", router);

app.get("/", (req, res) => { // '/' route works as expected
    console.log("This seems to be working");
    res.send("Welcome to Contract Farming WebApp!"); // Sends a response back to the browser
});

// app.get("/",(req,res)=>{//working
//     console.log("this seems to be working");
// })

mongoose
.connect(mongodbURL) 
.then(()=>{
    console.log('App connected to database');

app.listen(PORT,()=>{ //this is done so that out express server only runs when the data base connection is established
    console.log(`The App is Listening to PORT ${PORT}`);
})
})
.catch((error)=>{  
    console.log(error);
})
