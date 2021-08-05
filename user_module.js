var mongoose = require("mongoose");

conn_str = "mongodb://mdanassk:9768208289@cluster0-shard-00-00.rbpmf.mongodb.net:27017,cluster0-shard-00-01.rbpmf.mongodb.net:27017,cluster0-shard-00-02.rbpmf.mongodb.net:27017/Faculty?ssl=true&replicaSet=atlas-ro7q1e-shard-0&authSource=admin&retryWrites=true&w=majority";
//connection to MongoDb
mongoose.connect(conn_str, { useNewUrlParser: true, useUnifinedTopology: true })

const orderSchema = new mongoose.Schema({
 "userId": String,
  "jobTitleName": String,
  "firstName": String,
  "lastName": String,
  "department": String,
  "employeeCode": String,
  "phoneNumber": String,
  "emailAddress": String

});

const orderModel = new mongoose.model("teachers", orderSchema);

exports.order = orderModel;
