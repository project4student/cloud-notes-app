const express = require("express")
const Notes = require("../models/Notes");
const authtoken = require("../middleware/authwebtoken");
const { body, validationResult } = require("express-validator");

const route = express.Router();


route.get("/fetchallnotes", authtoken, async (req, res) => {
	if (req.isAuthorized) {
		try {
			const notes = await Notes.find({ user: req.user.id.toString() }, { _id: 0, user: 0, __v: 0 });
			res.json({ success: "fetched", notes });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	else {
		res.json({ error: "You are not authorized" });
	}
});



route.post("/addnewnote", [
	body("title").isLength({ min: 3 }).withMessage("Title must be of atleast length 3!!"),
	body("description").isLength({ min: 5 }).withMessage("Description must be of atleast length 5!!"),
], authtoken, async (req, res) => {
	if (req.isAuthorized) {
		try {
			const data = req.body;
			console.log(data);
			const errors = validationResult(req);
			if (!errors.isEmpty())
				return res.status(400).json({ error: errors.array() });
			const newNote = new Notes(Object.assign({ user: req.user.id.toString() }, data, { date: new Date().getTime() }));
			const savedNote = await newNote.save();
			if (savedNote)
				res.json({ success: "Note Saved Successfully!!", date: savedNote.date });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	else {
		res.json({ error: "You are not authorized" });
	}
});

route.delete("/deletenote", authtoken, async (req, res) => {
	if (req.isAuthorized) {
		try {
			const date = req.query.time;
			const note = await Notes.findOne({ date });
			if (!note) {
				res.json({ error: "This Note Doesn't Exist!!" });
			}
			else if (note.user.toString() !== req.user.id.toString()) {
				res.json({ error: "You are not authorized" });
			}
			else {
				const deleted = await Notes.deleteOne({ date });
				if (deleted)
					res.json({ success: "Successfully deleted note!!" });
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	else {
		res.json({ error: "You are not authorized" });
	}
});

route.put("/updatenote", authtoken, async (req, res) => {
	if (req.isAuthorized) {
		try {
			let temp = { errors: [] };
			const date = req.query.time;
			const data = {};
			if (req.body.title) {
				(req.body.title.length >= 3) ?
					data.title = req.body.title :
					temp.errors.push({ msg: "Title Must be 3 character long !!" });
			}
			if (req.body.description) {
				(req.body.description.length >= 5) ?
					data.description = req.body.description :
					temp.errors.push({ msg: "Description Must be 5 character long !!" });
			}
			if (req.body.tag) data.tag = req.body.tag;
			if (temp.errors.length > 0) {
				return res.json(temp);
			}
			const note = await Notes.findOne({ date });
			if (!note) {
				res.json({ error: "This Note Doesn't Exist!!" });
			}
			else if (note.user.toString() !== req.user.id.toString()) {
				res.json({ error: "You are not authorized" });
			}
			else {
				const updated = await Notes.updateOne({ date }, { $set: data });
				if (updated)
					res.json({ success: "Successfully updated note!!" });
			}
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	}
	else {
		res.json({ error: "You are not authorized" });
	}
})

module.exports = route;