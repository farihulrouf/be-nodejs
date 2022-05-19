
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const User = require('./models/user')
dotenv.config()
mongoose.connect(process.env.URI,
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


const productRouters = require("./routes/product")
const userRouters = require("./routes/user")
const categoryRouters = require("./routes/category")
const ownerRoutes = require("./routes/owner");

app.use("/api", productRouters)
app.use("/api", userRouters)
app.use("/api", categoryRouters)
app.use("/api", ownerRoutes);


app.listen(3002, err => {
	if (err) {
		console.log(err)
	}
	else {
		console.log("listening on POrt 3002")
	}
})


