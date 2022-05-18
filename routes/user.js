const router = require("express").Router();
const User = require("../models/user")


router.post("/users", async (req, res) => {
	try {
		let user = new User()
		user.name = req.body.name
		user.email = req.body.email
		user.password = req.body.password

		await user.save()

		res.json({
			status: true,
			message: "successful saved"
		});		
	} catch (err) {
		res.status(500).json({
			success: false,
			message: err.message
		})
	}
})




module.exports = router