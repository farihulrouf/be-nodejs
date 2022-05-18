
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://farihul_clearisk:peruvianAB12@cluster0.5e0y3.mongodb.net/clearisk_io?retryWrites=true&w=majority",
	err => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("COnnected to the daatabase")
		}
	}
)


app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
	res.json("hello amazon clone")
})

app.post("/", (req, res) => {
	console.log(req.body.name)
})

app.listen(3005, err => {
	if (err) {
		console.log(err)
	}
	else {
		console.log("listening on POrt 3005")
	}
})


