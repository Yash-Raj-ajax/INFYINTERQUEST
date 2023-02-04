const mongoose = require("mongoose");


// A analysis from a SR Developer when I got a hard to fix bug: 

//const mongoURL = "mongodb://localhost:27017/inote";

// it was a weird bug, usually localhost and 127.0.0.1 are synonyms but 
//  lately they have changed the localhost to be an ipv6 address so unless your services are configured
// to understand ipv6 addresses they will not work
// Time: [1:14 AM]
// 127.0.0.1 is ipv4 and a safer choice

const mongoURL = "mongodb://127.0.0.1:27017/inote";


mongoose.set("strictQuery", true);


const connectToMongo = () => {
  mongoose.connect(mongoURL).then(() => {
      console.log("Connected to Mongo Success")
  })
  .catch((error) =>{
      console.log(error);
  })
}

module.exports = connectToMongo;
