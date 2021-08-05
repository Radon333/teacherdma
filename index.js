var express = require("express");
var app = express();
const port = 8080;

/*API
 POST   --> CREATE
 GET    --> READ
 PUT    --> UPDATE
 DELETE --> DELETE
 */
var order_module = require("./user_module.js");
const detail = order_module.order;

app.use(express.json());
app.listen(process.env.PORT || port, () => {
	console.log("listening 8080...");

var cors = require("cors");
app.use(cors());
});

app.route("/staff")
    .get(async (req, res) => {
        let data = await detail.find();
        console.log(await detail);
        console.log(data);
        res.send(data);
    })

    .post(async (req, res) => {
        console.log(req.body);
        let s = new detail(req.body);
        let result = await s.save();
        res.send(result);

    })
    .put(async (req, res) => {
        console.log(req.body);
        let s = await detail.updateOne({ "userId": req.body.userId }, { "$set": { "firstName": req.body.firstName}})
        res.send(s);

    })
    .delete(async (req, res) => {
        
        let d = await detail.deleteOne({ "userId": req.body.userId });
        res.send(d);
        console.log(d);

    })
/*
app.route("/teachers")
    .get(async (req, res) => {
        let data = await teacher.find();
        console.log(data);
        res.send(data);
    })
    .post(async (req, res) => {
        console.log(req.body);
        let s = new teacher(req.body);
        let result = await s.save();
        res.send(result);
    })
    .put(async (req, res) => {
        console.log(req.body);
        let s = await teacher.updateOne({ "_id": req.body._id }, { "$set": { "name": req.body.name, "age": req.body.age, "city": req.body.city } })
        res.send(s);

    })
    .delete(async (req, res) => {
        let d = await teacher.deleteOne({ "_id": req.query._id });
        res.send(d);
        console.log(d);

    })
    */