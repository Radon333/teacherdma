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
});

var cors = require("cors");
app.use(cors());


app.route("/staff")
    .get(async (req, res) => {
        let data = await detail.find();
        console.log(await detail);
        console.log(data);
        res.send(data);
    })

    .post(async (req, res) => {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(teacher.password, salt);
        
        console.log(req.body);
        let s = new detail(req.body);
        s.password=hash;
        let result = await s.save();
        res.send(result);
        

    })
    .put(async (req, res) => {
        console.log(req.body);
        let s = await detail.updateOne({ "employeeCode": req.body.employeeCode  }, { "$set": {   "jobTitleName":req.body.jobTitleName,"name":req.body.firstName,"branch":req.body.department, "emailID": req.body.emailAddress ,"phoneNumber": req.body.phoneNumber,"password":req.body.password}})
        res.send(s);
        

    })
    .delete(async (req, res) => {
        
        let d = await detail.deleteOne({"_id": req.body._id});
        res.send(d);
        console.log(d);
		
		
		

	})
	
	
	app.get("/staff/:id", async (req, res) => {
	console.log(req.params.id);
	let data = await detail.find({"_id": req.params.id});
	res.send(data[0]);
});
