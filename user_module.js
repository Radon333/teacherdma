var mongoose = require("mongoose");

conn_str = "mongodb://shiv-nosql:nosql@cluster0-shard-00-00.esppv.mongodb.net:27017,cluster0-shard-00-01.esppv.mongodb.net:27017,cluster0-shard-00-02.esppv.mongodb.net:27017/project?ssl=true&replicaSet=atlas-tpt76p-shard-0&authSource=admin&retryWrites=true&w=majority";
//connection to MongoDb
mongoose.connect(conn_str, { useNewUrlParser: true, useUnifinedTopology: true })

const orderSchema = new mongoose.Schema({
  "employeeCode": String,
  "name": String,
  "branch": String,
  "jobTitleName": String,
  "phoneNumber": String,
  "emailID": String,
  "password":String,
  "announcements":[],
  "notes":{
      "name":String,
      "desc":String,
      "img":{
          "data":Buffer,
          "contentType":String 
      }
  }
  

});

const orderModel = new mongoose.model("teachers", orderSchema);

exports.order = orderModel;
