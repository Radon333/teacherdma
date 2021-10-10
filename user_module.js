var mongoose = require("mongoose");

conn_str = "mongodb+srv://shiv-nosql:nosql@cluster0.esppv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
