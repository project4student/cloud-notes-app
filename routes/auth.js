const express = require("express")
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const authtoken = require("../middleware/authwebtoken");

const route = express.Router();
const JWT_AUTH = "Gohil@Chintanrajsinh#Harendrasinh&Notes%App"
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

route.get("/", (req, res) => {
	res.send("auth");
});

route.post("/signup", [
	body("name").isLength({ min: 3, max: 50 }).isAlpha("en-IN", { ignore: " " }).withMessage("Enter Proper Name !!"),
	body("email").isEmail().withMessage("Enter Proper Email !!"),
	body("password").isLength({ min: 6, max: 20 }).isStrongPassword().withMessage("Password must contain at least one small alphabate, one Capital alphabate, one special alphabate and one number and must have at least length 6 !!")
], async (req, res) => {
	const data = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ error: errors.array() });
	}
	try {
		const auser = await User.findOne({ email: data.email });
		if (!auser) {
			const salt = await bcrypt.genSalt(10);
			let securePassword = await bcrypt.hash(data.password, salt);
			data.password = securePassword;
			const user = new User(data);
			const check = await user.save();
			if (check)
				res.json({ success: `Signup Successful !!` });
		}
		else {
			throw new Error("This Email already exsits !!");
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});


route.post("/login", [
	body("email").isEmail().withMessage("Enter Valid Email !!"),
	body("password").isStrongPassword().isLength({ min: 6 }).withMessage("Password must contain at least one small alphabate, one Capital alphabate, one special alphabate and one number and must have at least length 6 !!")
], async (req, res) => {
	const { email, password } = req.body;
	const errors = validationResult(req);
	console.log(errors);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const checkUser = await User.findOne({ email });
		if (!checkUser) {
			throw new Error("Authentication Failed !!");
		}
		else {
			const doesPassMatch = await bcrypt.compare(password, checkUser.password);
			if (!doesPassMatch)
				throw new Error("Authentication Failed !!");
			else {
				const jwtData = {
					user: {
						id: checkUser._id.toString()
					}
				}
				const jwtToken = jwt.sign(jwtData, JWT_AUTH);
				res.cookie('authtoken', jwtToken);
				res.cookie("isloggedin", "true");
				res.json({ success: "Logged In" })
			}
		}
	} catch (error) {
		res.status(400).send({ error: error.message });
	}
});

route.post("/getUser", authtoken, async (req, res) => {
	const data = req.body;
	try {
		const user = await User.findById(req.user.id, { _id: 0, __v: 0, date: 0, password: 0 });
		res.json(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
});
module.exports = route;