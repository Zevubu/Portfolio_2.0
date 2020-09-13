const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
// const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//file transfer module 
app.use(fileUpload ({createParentPath: true}, {debug: true}) );


// parse requests of content-type: application/json
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// enable cross origin sharring
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

// app.use(routes);

app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`)
})