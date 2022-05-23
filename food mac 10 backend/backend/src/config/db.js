
const mongoose = require("mongoose");

module.exports = ()=>{
   return mongoose.connect( "mongodb+srv://user:pass@cluster0.9edpm.mongodb.net/test");
}