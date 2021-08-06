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
        let s = await detail.updateOne({ "userId": req.body.userId }, { "$set": {   "jobTitleName":req.body.jobTitleName,"firstName":req.body.firstName,"lastName":req.body.lastName,"department":req.body.department, "employeeCode": req.body.employeeCode ,"emailAddress": req.body.emailAddress ,"phoneNumber": req.body.phoneNumber}})
        res.send(s);

    })
    .delete(async (req, res) => {
        
        let d = await detail.deleteOne({ "userId": req.body.userId });
        res.send(d);
        console.log(d);
		
		
		

	})
	
	
	app.get("/staff/:id", async (req, res) => {
	console.log(req.params.id);
	let data = await detail.find({"_id": req.params.id});
	res.send(data[0]);
});
