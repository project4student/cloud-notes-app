const jwt = require("jsonwebtoken");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")


const JWT_AUTH = "Gohil@Chintanrajsinh#Harendrasinh&Notes%App"

const app = express();
app.use(cookieParser());
app.use(cors());

const authtoken = (req, res, next) => {
	try {
		const token = req.cookies.authtoken;
		if (!token) {
			req.isAuthorized = false;
		}
		else {
			const data = jwt.verify(token, JWT_AUTH);
			req.user = data.user;
			req.isAuthorized = true;
		}
	}
	catch (err) {
		req.isAuthorized = false;
	}
	next();
}

module.exports = authtoken