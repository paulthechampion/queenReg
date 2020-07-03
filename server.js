if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
};

const express= require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");
const indexRoute = require("./routes/index");
const bodyParser = require("body-parser");

app.set("view engine", 'ejs');
app.set("layout", "layouts/layout");

app.use(expressLayout);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({limit:"10mb", extended:false }));
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true, useUnifiedTopology:true
})

const db = mongoose.connection;

db.on("error", error=> console.error(error));
db.once("open", ()=> console.log("Connected to Database"));

app.use('/', indexRoute);

app.listen(process.env.PORT || 4005);
console.log("Listening to Port 4005")